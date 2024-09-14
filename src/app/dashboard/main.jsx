import React from 'react'
import "./dashboard.css"
import Chart from './chart';
import Sales from './sales';
import Navbar from './navbar';
import icon from '../images/icon.jpg'
import greenArrow from '../images/line1.jpg'
import smallGreen from '../images/smallGreen.png'
import icon2 from '../images/icon2.jpg'
import line2 from '../images/line2.jpg'
import smallRed from '../images/smallRed.jpg'
import icon3 from '../images/icon3.jpg'
import icon4 from '../images/icon4.jpg'




// const datepicker = new Datepicker()

function Main() {

  return (
    <main>
        <Navbar/>
       
        <section>
            <div className='flex space-x-12 max-md:flex-col'>
                <Chart/>
                <div className='mt-[7rem] flex flex-col space-y-4'>
                  <div className='flex space-x-4 max-md:flex-col max-md:space-y-10 max-md:space-x-0'>
                      <Sales icon = {icon} arrow={greenArrow} smallArrow={smallGreen} sale = {'350'} color ={true}/>
                      <Sales icon = {icon2} arrow={line2} smallArrow={smallRed} sale = {'270'} color ={false}/>
                  </div>
                  <div className='flex space-x-4 max-md:flex-col max-md:space-y-10 max-md:space-x-0'>
                    <Sales icon = {icon3} arrow={line2} smallArrow={smallRed} sale = {'1567'} color ={false}/>
                    <Sales icon = {icon4} arrow={greenArrow} smallArrow={smallGreen} sale = {'$350.000'} color ={true}/>
                  </div>

                </div>

                

            </div>
        
        </section>
   
        
    </main>
  )
}

export default Main
