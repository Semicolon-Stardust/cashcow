import React, {useEffect, useState, useContext} from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { UserContext } from '../../context/UserContext';

import { Line } from 'react-chartjs-2';
import axios from 'axios';

Chart.register(CategoryScale);


const ExpenditureChart = ({transaction}) => {

    const { user } = useContext(UserContext);

    const [Data, setData] = useState([
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
      ]);


      const fetchData = async () => {
        let { data } = await axios.get("/transaction/chart");

        let transactions = data.transaction;

        // sort transactions by date
        // transactions.sort((a, b) => {
        //   return new Date(a.createdAt) - new Date(b.createdAt);
        // });


        let dataForCharts = Object.keys(data.transaction).reverse().map((key, index) => {
          return {
            id: index + 1,
            date: `${new Date(key).getDate()} ${new Date(key).toLocaleString('default', { month: 'short' })}`,
            MoneyOnDate: user.currentBalance + data.transaction[key],
          };
        })
        
        setChartData({
          labels: dataForCharts.map((data) => data.date), 
          datasets: [
            {
              label: "Amount at the end of the day",
              data: dataForCharts.map((data) => data.MoneyOnDate),
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
        })
      };


      useEffect(() => {
        fetchData();
      }, []);

      useEffect(() => {
        fetchData();
      }, [transaction])
 
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