import "./InfoBox.css"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo,setweatherInfo] = useState({City: "Delhi",
        feelsLike: 12.87,
        humidity: 94,
        temp: 13.05,
        tempmax: 13.05,
        tempmin: 13.05,
        weather: "fog"})
    
    let updateInfo = (newinfo)=>{
        setweatherInfo(newinfo);
    }
    return (
        <div>
            <h2 className="Font">Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
            
        </div>
    );
}
