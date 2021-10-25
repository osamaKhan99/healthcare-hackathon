import React, { useState } from "react";
import Chart from "react-apexcharts";
import './charts.css'

export default function HospitalSurvey() {
  const [option, setOption] = useState({
    title: {
      text: "Hospital Survey",
      style: {
        fontSize: "20px",
        fontWeight: "normal",
      },
    },
    chart: {
      id: "hospital-survey",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "2020-1",
        "2020-2",
        "2020-3",
        "2020-4",
        "2020-5",
        "2020-6",
        "2020-7",
        "2020-8",
        "2020-9",
        "2020-10",
        "2020-11",
        "2020-12",
      ],
    },
    toolbar: false,
    colors: ["#FAC032", "#558EFF"],
    fill: {
      colors: ["#FFFFFF", "#558EFF"],
      opacity: 0.2,
      type: "gradient",
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.3,
      },
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 20,
        height: 3,
        radius: 0,
        offsetY: -2,
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Patients 2019",
      data: [50, 100, 80, 130, 90, 120, 180, 110, 140, 100, 160, 130],
    },
    {
      name: "Patients 2020",
      data: [150, 120, 90, 120, 100, 150, 200, 120, 250, 220, 260, 250],
    },
  ]);

  return (
    <div className="hosp-chart">
      <Chart options={option} series={series} type="area" height="400px" />
    </div>
  );
}
