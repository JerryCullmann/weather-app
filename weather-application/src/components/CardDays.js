const CardDays = ({dataFive,j,i}) =>{

    console.log(dataFive)
    console.log(j)
    console.log(i)


    return (
    <div className="containers">
        <h2>{dataFive.city.name}</h2>
        {/* <h2>in {j / 8 + 1} Days </h2> */}
        <h2>In {(j/8)+1} {(j!==0) ? ('Days') : ('Day')}</h2>

        <p>Min : {Math.floor(Math.ceil(dataFive.list[i].main.temp_min))}c°</p>
        <p>Max : {Math.floor(Math.ceil(dataFive.list[i].main.temp_max))}c°</p>
        <p>{dataFive.list[i].weather[0].description}</p>
        <p>Feels like : {dataFive.list[i].main.feels_like}c°</p>
        <p>Humidity : {dataFive.list[i].main.humidity}%</p>
    </div>
    )
}

export default CardDays;