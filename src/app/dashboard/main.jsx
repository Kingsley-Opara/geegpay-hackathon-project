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
import LastOrders from './lastOrders';
import TopPlatform from './topplatform';



// const datepicker = new Datepicker()

function Main() {

  return (
    <main>
        <Navbar/>
       
        <section>
            <div className='flex space-x-12 max-md:flex-col max-sm:items-center max-lg:space-x-8'>
                <Chart/>
                <div className='mt-[7rem] flex flex-col space-y-4 max-md:space-y-12'>
                  <div className='flex max-sm:flex-col max-sm:space-y-10 max-md:space-x-9 max-sm:space-x-0 space-x-6'>
                      <Sales icon = {icon} arrow={greenArrow} smallArrow={smallGreen} sale = {'350'} color ={true}/>
                      <Sales icon = {icon2} arrow={line2} smallArrow={smallRed} sale = {'270'} color ={false}/>
                  </div>
                  <div className='flex max-sm:flex-col max-sm:space-y-10 max-md:space-x-9 max-sm:space-x-0 space-x-6'>
                    <Sales icon = {icon3} arrow={line2} smallArrow={smallRed} sale = {'1567'} color ={false}/>
                    <Sales icon = {icon4} arrow={greenArrow} smallArrow={smallGreen} sale = {'$350.000'} color ={true}/>
                  </div>

                </div>

                

            </div>
        
        </section>
        <section className='flex mt-10 space-x-5 max-md:flex-col space-y-10 snap-x'>
          <div className="w-[44rem] ml-6 max-md:w-[36rem] max-sm:w-[20rem] scroll-ml-6 max-lg:w-[30rem]">
            <LastOrders/>

          </div>
          <div className='w-[30rem] bg-white max-md:w-[36rem] dark:bg-black dark:text-white max-sm:w-[20rem]'>
            <TopPlatform/>

          </div>
          
          <div>
      
          </div>
          
        </section>
   
        
    </main>
  )
}

export default Main
