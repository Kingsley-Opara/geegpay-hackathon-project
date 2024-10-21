'use client'
import React from 'react'
import {BarChartData} from "./data"
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale,  
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales
} from "chart.js";
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend

)
function Chart() {
    const option = {
        scales: {
            y: {
                min: 0,
                max: 100.000,
                ticks: {
                    beginAtZero: true,
                    stepSize: 10.000,
                },
            x: {
                beginAtZero: true
            }
            },
            
            
        },
        barThickness: 15
    }
    const [sort, setSort] = useState(null)
    const [bardata, setBarData] = useState(BarChartData)

    const handleForm = (e) =>{
        // e.preventDefault()
        setSort(e.target.value)
        console.log(sort)
    }
    let data = BarChartData
    const updateData = () =>{
        let labels = []
        if (sort === 'yearly'){
            labels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023',]
            data = {...BarChartData, labels}
            setBarData(data)

        }
        else if (sort === 'weekly'){
            labels = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 
                'week 7', 'week 8', 'week 9', 'week 10', 'week 11', 'week 12', ]
            data = {...BarChartData, labels}
            setBarData(data)
        }
        else{
            labels = BarChartData.labels
            data = {...BarChartData, labels}
            setBarData(data)
        }

    }
    useEffect(()=>{
        updateData()

    }, [sort])

  return (
    <div className='w-[700px] mt-[7rem] h-[24rem] bg-white ml-5 text-black max-md:w-[37rem] max-lg:w-[32rem]
    max-sm:w-[300px] max-sm:h-[18rem] dark:bg-gray-800 dark:text-white dark:border-2 rounded-lg'>
        <div className='flex place-content-between justify-between '>
            <div>
                <p className='text-lg ml-4 mt-2'>Sales trend</p>
            </div>
            <div className='mt-3 mr-3'>
                <form action="" className='flex space-x-2' >
                    <label htmlFor="sortby" className='text-lg mt-1 max-md:text-sm'>Sort By:</label>
                    <select className='rounded-2xl text-sm bg-white border-black p-2 pl-2 mr-2 dark:bg-black dark:text-white' 
                    id='sortby' onChange={(e) => handleForm(e)}>
                        <option value={'monthly'}>Monthly</option>
                        <option value={'yearly'}>Yearly</option>
                        <option value={'weekly'}>Weekly</option>

                    </select>
                </form>



            </div>

        </div>
        <div className='max-sm:h-[26rem] max-sm:w-[19rem] '>
            <Bar data={bardata} options={option} className=' pl-4 pr-4 pt-4 pb-4'/>

        </div>
        
        
      
    </div>
  )
}

export default Chart
