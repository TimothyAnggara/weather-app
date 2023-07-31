import { Line } from 'react-chartjs-2';

export default function LineChart({data, options}){
    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [300, 450, 600, 400, 700, 550],
            fill: false, // This makes the line not filled with color
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4, // This controls the curvature of the line
          },
        ],
      };

    const options1 = {
        plugins: {
          legend: {
            display: false, // Set this to false to hide the legend
          },
        },
      };

    return (
    <div className='chart-container'>
        <Line className='chart-object' data={data1} options={options1}/>
    </div>
    )
}