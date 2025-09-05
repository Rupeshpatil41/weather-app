import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';


export default  function WeatherApp(){
    const [WeatherInfo, setWeatherInfo] = useState({
         city: "London",
        temperature: 25,
        humidity: 60,
        description: "Sunny",
        windSpeed: 5,
        pressure: 1013
    });

    let UpdateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
<div style={{ textAlign:"center"}}>
    <h2> Weather App by RUPESH </h2>
    <SearchBox UpdateInfo={UpdateInfo}/>
    <InfoBox Info = {WeatherInfo}/>
</div>
    )
}