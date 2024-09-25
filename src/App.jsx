import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] =useState(null);
  const [loading, setLoading]= useState(false);
  const [showModel, setShowModel] =useState(false);

  function handleToggleModel()  {
    setShowModel(!showModel)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY= import.meta.env.VITE_NASA_API_KEY;
      const url ='https://api.nasa.gov/planetary/apod' +
      `?api_key=${NASA_KEY}`
      try {
        const response= await fetch(url);
        const apiData= await response.json();
        setData(apiData)
        console.log('DATA\n',data)
      } catch (error) {
        console.log(error.message)
      }
    } 
    // fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main/>) : (
        <div className="loadingState"> 
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel &&  (
        <SideBar 
        handleToggleModel={handleToggleModel} /> 
      )}
      <Footer 
      handleToggleModel={handleToggleModel} />
    </>
  )
}

export default App;
