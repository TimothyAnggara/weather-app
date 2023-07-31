import "../CSS/Heading.css";
import Menu from "../Images/Menu.svg";
import Plus from "../Images/Plus.svg";
import SearchBar from "./SearchBar";
export default function Heading(){
    return(
        <div id="heading" className="heading-container">
            {/* <div className="menu-container">
                <img src={Menu} className="menu-icon" />
            </div> */}
            <div className="location-container">
                <div>
                    <span className="location-title">San Diego, </span> <span className="location-subtitle">USA</span> 
                </div>
                <div>
                    <span className="location-description">Today, 23/07/2023</span>
                </div>
            </div>
            {/* <div className="Plus-container">
                 <img src={Plus} className="plus-icon" />
            </div> */}
        </div>
    )
}