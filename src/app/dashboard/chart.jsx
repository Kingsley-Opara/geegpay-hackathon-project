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
                max: 50000,
                ticks: {
                    beginAtZero: true,
                    stepSize: 10000,
                },
            x: {
                beginAtZero: true
            }
            },
            
            
        },
        barThickness: 15
    }
    const [sort, setSort] = useState(null)
    // useEffect(()=>{

    // }, [sort])
    const handleForm = (e) =>{
        // e.preventDefault()
        setSort(e.target.value)
        console.log(sort)
    }

  return (
    <div className='w-[700px] mt-[7rem] h-[24rem] bg-white ml-5 max-md:w-[300px]'>
        <div className='flex place-content-between justify-between '>
            <div>
                <p className='text-lg ml-4 mt-2'>Sales trend</p>
            </div>
            <div className='mt-3 mr-3'>
                <form action="" className='flex space-x-2' >
                    <label htmlFor="sortby" className='text-lg mt-1'>Sort By:</label>
                    <select className='rounded-2xl text-sm bg-white border-black p-2 pl-2 mr-2' id='sortby' onChange={(e) => handleForm(e)}>
                        <option selected value={'monthly'}>Monthly</option>
                        <option value={'yearly'}>Yearly</option>
                        <option value={'weekly'}>Weekly</option>

                    </select>
                </form>



            </div>

        </div>
        
        <Bar data={BarChartData} options={option} className='h-[60rem]'/>
        
      
    </div>
  )
}

export default Chart
