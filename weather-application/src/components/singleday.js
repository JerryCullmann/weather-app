// let SingleDay = ({data}) => {
//     console.log(data)
//     return(
//         <section className="container">
//         {/* <div className="location">
//           <h1>{data.name}</h1>
//         </div> */}
//         <div className="date">
//           {typeof data.main != "undefined" ? (
//             <h2>Date : {new Date().toLocaleString() + ""}</h2>
//           ) : null}
//         </div>
//         <div className="min">
//           {data.main ? <p>Min : {data.main.temp_min.toFixed()}c°</p> : null}
//         </div>
//         <div className="max">
//           {data.main ? <p>Max : {data.main.temp_max.toFixed()}c°</p> : null}
//         </div>
//         <div className="description">
//           {data.weather ? <p>{data.weather[0].description}</p> : null}
//         </div>

//         <div className="feels">
//           {data.main ? (
//             <p>Feels like : {data.main.feels_like.toFixed()}c°</p>
//           ) : null}
//         </div>
//         <div className="humidity">
//         {data.main ? (
//             <p>Feels like : {data.main.humidity.toFixed()}%</p>
//           ) : null} </div>
//       </section>
//     )
// }

// export default SingleDay()