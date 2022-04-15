import { useState, useEffect } from "react";
import FiveDaysScript from "./components/five-days-script";
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


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const statusHandlerKey = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };

  useEffect(() => {
    const apiCall = async () => {
      setData(await fetchData(location));
      setDataFive(await fetchDataFive(location));

    };
    if (location) {
      apiCall();
    }
  }, [location]);


  return (
    <>
      <div className="search">
        <input
          className="search__bar"
          type="text"
          onChange={statusHandler}
          onKeyPress={statusHandlerKey}
          placeholder="Enter location"
        />
        <input
          className="search__btn"
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
              <h2>{date}</h2>
            ) : 
            
            null}
          </div>
          <div className="min">
            {data.main ? <p>Min : {data.main.temp_min.toFixed()}c°</p> : null}
          </div>
          <div className="max">
            {data.main ? <p>Max : {data.main.temp_max.toFixed()}c°</p> : null}
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
          <div className="description">
            {data.weather ? <p>Overall : {data.weather[0].description}</p> : null}
          </div>
        </section>
      )}
    
      <div className="forecasts">
        {dataFive &&
          <FiveDaysScript dataFive={dataFive} />
        }
      </div>
    
    </>
  );
}
export default App;
