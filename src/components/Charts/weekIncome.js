import React, { useState} from 'react'
import Chart from 'react-apexcharts';
import './charts.css'

export default function WeekIncome() {
    const [option] = useState({
        title: {
            text: "$ 25,000",
            style: {
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
          chart: {
            id: "week-income",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: [
              "25 July",
              "26July",
              "27 July",
              "28 July",
              "29 July",
              "30 July",
              "31 July"
            ],
          },
          yaxis: {
              show: true,
              seriesName: 'Income in Current Week',
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
          colors: ["#FAC032", "#558EFF"],
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
              text: "Income in Current Week",
              align: 'right',
              style:{
                  fontWeight: 'bold'
              }
          }
    })
    const [series] = useState([
        {
            name: "Income in Current Week",
            data: [50000,80000, 30000, 60000, 45000, 20000,30000],
        },
    ])
    return (
        <div className="week-income">
            <Chart options={option} series={series} type="line" height="300px" width="600px" />
        </div>
    )
}
