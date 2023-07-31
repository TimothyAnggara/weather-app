
import "../CSS/LineGraph.css";
import LineChart from "./Sub-components/LineChart";
export default function LineGraph(){

      return(
        <div className='flex line-chart-container'>
            <div className='button-container'>
                <button>Temperature</button>
                <button>Precipitation</button>
                <button>Wind</button>
            </div>
            <LineChart />
        </div>

      )
}