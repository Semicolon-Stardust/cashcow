import React, {useState} from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

const Data = [
    {
      id: 1,
      date: "1 Jan",
      MoneyOnDate: 80000,
    },
    {
      id: 2,
      date: "2 Jan",
      MoneyOnDate: 45677,
    },
    {
      id: 3,
      date: "3 Jan",
      MoneyOnDate: 78888,
    },
    {
      id: 4,
      date: "4 Jan",
      MoneyOnDate: 90000,

    },
    {
      id: 5,
      date: "5 Jan",
      MoneyOnDate: 4300,
    },
    {
      id: 6,
      date: "6 Jan",
      MoneyOnDate: 10000
    },
    {
      id: 7,
      date: "7 Jan",
      MoneyOnDate: 10000
    },
  ];


const ExpenditureChart = () => {
 
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.date), 
        datasets: [
          {
            label: "Amount at the end of the day",
            data: Data.map((data) => data.MoneyOnDate),
            backgroundColor: [
              "#f70a0a",
              "#f7c40a",
              "#59f70a",
              "#0af7a0",
              "#0a69f7",
              "#710af7",
              "#f70ae4"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
  
    return (
    <>
    <div>Expenditure Chart</div>
    <Line
  data={chartData}
  options={{
    plugins: {
      title: {
        display: true,
        text: "Weekly Expenditure Chart",
      },
      legend: {
        display: false
      }
    }
  }}
/>

    </>
  )
}

export default ExpenditureChart