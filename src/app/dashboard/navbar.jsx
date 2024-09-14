import React from 'react'
import "./dashboard.css"
import SearchIcon from '@mui/icons-material/Search';
import Datepicker from "tailwind-datepicker-react"
import DemoComponent from './datetime';
import bell from '../images/solar-bell.jpg';
import dp from '../images/dp.png';
import Image from 'next/image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chart from './chart';
import Sales from './sales';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {
  return (
    <nav className='ml-5 mt-4 max-md:ml-0 max-md:mt-7 fixed'>
        <div className='flex space-x-[17rem] max-md:space-x-[0rem]'>
            <div>
                <h3 className='text-2xl mt-3 max-md:text-xl max-sm:mt-0 max-sm:text-sm'>Dashboard</h3>


            </div>
            
            <div className='mt-3 ml-20 flex space-x-7 max-md:space-x-4 max-sm:hidden'>
                <div className='relative'>
                    <SearchIcon className= "absolute top-1 left-2"/>
                    <input type="text" className='h-9 w-[18rem] rounded-xl p-3 pl-10 max-md:w-[11rem]' placeholder='Search...'/>
                </div>
                

                <DemoComponent/>  

                <div className ="mt-1 flex space-x-5 pr-4">
                    <div className='rounded-full bg-white w-[42px] h-[40px]'>
                        <NotificationsNoneIcon className='cursor-pointer mt-2 text-[1.8rem] pl-2'/>

                    </div>
                    
                    <div className="rounded-2xl border-white bg-white pl-4 pr-4 pt-1 flex space-x-2 max-md:hidden">
                        <Image src={dp} alt='dp' className='h-8 w-8 mt-1'/>
                        <div className="flex flex-col">
                            <div className='text-md font-semibold'>Justin Bergson</div>
                            <div className='text-sm flex'>
                                justin@gmail.com
                                

                            </div>
                        

                        </div>
                        <ExpandMoreIcon className='cursor-pointer'/>

                    </div>
                </div>              
                
            </div>
            
        </div>
        

    </nav>
  )
}

export default Navbar
