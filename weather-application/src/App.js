import axios from "axios";
import { useState, useEffect } from "react";
import Fivedaysscript from "./components/five-days-script";
import { fetchData, fetchDataFive } from "./components/api";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Weather Application</h1>
      <One />
      {/* <Five /> */}
    </div>
  );
}

function One() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const [dataFive, setDataFive] = useState("");
  const [status, setStatus] = useState([]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const statusHandlerKey = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1bb08c58067521a088b6b725c7d7ae20`;
  // const searchLocation = (event) => {
  //   if (event.key === "Enter") {
  //     axios.get(url).then((response) => {
  //       setData(response.data);
  //     });
  //     setLocation("");
  //   }
  // };

  useEffect(() => {
    const apiCall = async () => {
      setData(await fetchData(location));
      console.log(data)
      setDataFive(await fetchDataFive(location));

    };
    if (location) {
      apiCall();
    }
  }, [location]);


  return (
    <>
      <div className="Search">
        <input
          type="text"
          onChange={statusHandler}
          onKeyPress={statusHandlerKey}
          placeholder="Enter location"
        />
        <input
          type="submit"
          value="Search"
          onClick={() => setLocation(status)}
        />
      </div>

      {data && (
        <section className="container">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="date">
            {typeof data.main != "undefined" ? (
              <h2>Today</h2>
            ) : // <h2>Date : {new Date().toLocaleString() + ""}</h2>
            null}
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
            ) : null}{" "}
          </div>
        </section>
      )}
    
      <div className="forecasts">
        {typeof data.main != "undefined" ? (
          <Fivedaysscript dataFive={dataFive} />
        ) : (
          
          <></>
        )}
      </div>
    
    </>
  );
}
export default App;
