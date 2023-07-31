import WeatherDetailsComponent from "./Sub-components/WeatherDetailsComponent";
import "../CSS/WeatherDetails.css";

export default function WeatherDetails(){
    return(
        <div id="weather-details" className="details-container">
            <div className="row">  
                <WeatherDetailsComponent image="" detailTitle="wind" detail="12.4" />
                <WeatherDetailsComponent image="" detailTitle="wind" detail="12.4"/>
            </div>
            <div className="row">  
                <WeatherDetailsComponent image="" detailTitle="wind" detail="12.4" />
                <WeatherDetailsComponent image="" detailTitle="wind" detail="12.4"/>
            </div>
        </div>
    )
}