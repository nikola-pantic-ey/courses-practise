import ChartBar from "./ChartBar";
import './chart.css'


function Chart(props) {

    const valueArray=props.chartDataPoints.map(e=>e.value)
const totalMaximum=Math.max(...valueArray)
console.log(valueArray)

    return ( 
   <div className="chart">

{props.chartDataPoints.map(e=><ChartBar e={e} key={e.label} max={totalMaximum}/>)}

        </div>
     );
}

export default Chart;