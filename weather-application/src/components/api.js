const fetchData = async (location) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=1bb08c58067521a088b6b725c7d7ae20`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
const fetchDataFive = async (location) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&APPID=1bb08c58067521a088b6b725c7d7ae20`
    );
    let dataFive = await response.json();
    return dataFive;
  } catch (err) {
    console.log(err);
  } 
};

export { fetchData, fetchDataFive };