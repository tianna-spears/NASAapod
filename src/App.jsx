import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModel, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      const cachedData = localStorage.getItem(localKey);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false); 
        return; 
      }

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      } catch (error) {
        console.error("Fetch error: ", error.message);
      } 
    }
      setLoading(false);
      
    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <p className="blackHole">
            <i className="fas fa-gear"></i> You are currently in a black hole. Please wait.
          </p>
        </div>
      ) : (
        <Home data={data} />
      )}
      {showModel && (
        <SideBar data={data} handleToggleModel={handleToggleModel} />
      )}
      {data && (
        <Footer data={data} handleToggleModel={handleToggleModel} />
      )}
    </>
  );
}

export default App;
