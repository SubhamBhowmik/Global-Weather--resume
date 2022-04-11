// http://api.openweathermap.org/data/2.5/weather?q=agartala&appid=8fb4df3a15269f7a074a966573a5413e
import React, { useState, useEffect } from 'react'
import WeatherInfoCard from './WeatherInfoCard';
import "./style.css";

const Temp = () => {

  const [searchdata, setSearchData] = useState("agartala");
  const [tempinfo,setTempinfo]=useState({});

  const getweatherinfo = async () => {
    try {
      let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&units=metric&appid=8fb4df3a15269f7a074a966573a5413e`;
      const res = await fetch(url);//response in promise all should use await 
      const data = await res.json();
      //fetching individual data using destructuring 
      const {temp,pressure,humidity}=data.main;
      const {main:weathermood}=data.weather[0];
      const{name}=data;
      const {speed}=data.wind;
      const{country,sunset}=data.sys;
     
      //making the new object using required weatherinformation from api and pass this object im new setupdated function(useState)
      const myNewWeatherInfo={
        temp,pressure,humidity,weathermood,speed,name,country,sunset
      };
       setTempinfo(myNewWeatherInfo);
       //now we will pass the information using props (or we can use context api) 
       //in weathercard.js page and  pass tempinfo as a props


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getweatherinfo();
  },[])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search...City,Country or any State"
            autoFocus
            id="search"
            className="searchTerm"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
            value={searchdata}

          />

          <button
            className="searchButton"
            type="button"
            onClick={getweatherinfo}
          >
            Search
          </button>
        </div>
        <div className="right">
        </div>
        
        <WeatherInfoCard tempinfo={tempinfo}/>
    
      
      </div>
      <p style={{margin:"2rem",color:"white"}}>Developed by Subham Bhowmik</p>
      
    </>
  )
}

export default Temp
