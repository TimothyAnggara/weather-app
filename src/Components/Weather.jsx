import Sunny from "../Images/Sunny.svg";
import Cloudy from "../Images/Cloudy.svg";
import Raining from "../Images/Raining.svg";
import "../CSS/Weather.css"
export default function Weather(){
    return(
        <div id="weather-body" className="weather-container">
            <div className="icon-container">
                <img src={Sunny} className="weather-icon" alt="weather"/>
            </div>
            <div className="weather-temperature">
                25°
            </div>
            <div className="weather-description">
                Sunny
            </div>
        </div>
    )
}