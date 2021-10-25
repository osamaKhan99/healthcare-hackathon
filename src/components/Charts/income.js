import React, { useState} from 'react'
import Chart from 'react-apexcharts';
import './charts.css'

export default function Income() {
    const [option] = useState({
        title: {
            text: "$ 100,000",
            style: {
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
          chart: {
            id: "month-income",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: [
              "1 July",
              "8 July",
              "16 July",
              "24 July",
              "31 July"
            ],
          },
          yaxis: {
              show: true,
              seriesName: 'Income in Current Month',
              labels:{
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
              },
            //   categories: [
            //     "$20,000",
            //     "$40,000",
            //     "$60,000",
            //     "$80,000",
            //     "$100,000"
            //   ]
          },
          toolbar: false,
          colors: ["#558EFF"],
          stroke:{
              curve: 'smooth'
          },
          markers: {
            size: 5,
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
          subtitle:{
              text: 'Income in Current Month',
              align: 'right',
              style:{
                  fontWeight: 'bold'
              }
          }
    })
    const [series] = useState([
        {
            name: "Income in Current Month",
            data: [50000,75000, 30000, 60000, 45000],
        },
    ])
    return (
        <div className="month-income">
            <Chart options={option} series={series} type="line" height="300px" width="600px" />
        </div>
    )
}
