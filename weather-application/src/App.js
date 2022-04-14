// //import logo from './logo.svg';
// //import './App.css';
// import { useEffect, useState } from "react";
// import WeatherDay from "./components/weatherday";

// function App() {
//   const [weatherInfo, setWeatherInfo] = useState();

//   useEffect(() => {
//     // const apiKey ='cc3ae9cd8fb4a8a203e26a3584d2f5ae';
//     // const locationKey='152909_PC';
//     // const cnt = '5';

//     fetch(
//       `http://api.openweathermap.org/data/2.5/forecast?q=Huy&units=metric&appid=cc3ae9cd8fb4a8a203e26a3584d2f5ae`
//     )
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .then((res) =>
//         setWeatherInfo(
//           res.list.map((listEntry) => {
//             return {
//               // name : listEntry.city.name,
//               min: listEntry.main.temp_min,
//               max: listEntry.main.temp_max,
//               // weatherInfo: listEntry.city.name,
//             };
//           })
//         )
//       );
//   }, []);

//   useEffect(() => {
//     console.log(weatherInfo);
//   }, [weatherInfo]);

//   return (
//     <>
//       <div>
//         {weatherInfo.map((i, index) => (
//           <div key={index}>
//             <WeatherDay min={i.min} max={i.max} weatherType={i.weatherType} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import axios from "axios";
import { useState } from "react";
// import SingleDay from './components/singleday'

function App() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1bb08c58067521a088b6b725c7d7ae20`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="Search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location"
        ></input>
         <section className="container">
        <div className="location">
          <h1>{data.name}</h1>
        </div>
        <div className="date">
          {typeof data.main != "undefined" ? (
            <h2>Today</h2>
            // <h2>Date : {new Date().toLocaleString() + ""}</h2>
          ) : null}
        </div>
        <div className="min">
          {data.main ? <p>Min : {data.main.temp_min.toFixed()}c°</p> : null}
        </div>
        <div className="max">
          {data.main ? <p>Max : {data.main.temp_max.toFixed()}c°</p> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>

        <div className="feels">
          {data.main ? (
            <p>Feels like : {data.main.feels_like.toFixed()}c°</p>
          ) : null}
        </div>
        <div className="humidity">
        {data.main ? (
            <p>Humidity : {data.main.humidity.toFixed()}%</p>
          ) : null} </div>
      </section>
        
      </div>
     
    </div>
  );
}
export default App;
