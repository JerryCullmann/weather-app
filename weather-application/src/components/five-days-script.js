import React from 'react';

const Fivedaysscript = ({ dataFive }) => {
    console.log(dataFive)

    const day = [];
    let j = 0;
  for (let i = 8; i < dataFive.list.length; i += 8, j += 8) {
    day.push(
      <div className="forecast">
        <h2>(dataFive.list[i].city.name)</h2>
        <h2>in {j / 8 + 1} Days </h2>
        <p>Min : {Math.floor(Math.ceil(dataFive.list[i].main.temp_min))}c°</p>
        <p>Max : {Math.floor(Math.ceil(dataFive.list[i].main.temp_max))}c°</p>
        <p>(dataFive.list[i].weather[0].description)</p>
        <p>Feels like : (dataFive.list[i].main.feels_like)c°</p>
        <p>Humidity : (dataFive.list[i].main.humidity)%</p>
      </div>
    )
    return(
      {day}
    )
  }
};
export default Fivedaysscript;