import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      setLoading(false);

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData);
        setLoading(true);
      }

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {loading ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fas fa-gear"></i>        
        </div>
      )}
      {showModel && (
        <SideBar data={data} handleToggleModel={handleToggleModel} />
      )}
      {data && (
        <Footer data={data} handleToggleModel={handleToggleModel} />
      )}
    </>
  )
}

export default App;