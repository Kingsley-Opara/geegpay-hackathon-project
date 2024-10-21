"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from "../images/logo.png"
import frame from "../images/frame.png"
import box from "../images/box.png"
import contact from "../images/contact.png"
import cube from "../images/cube.png"
import divide from "../images/divide.png"
import exclaim from "../images/exclaim.png"
import star from "../images/star.png"
import lightmode from "../images/lightmode.jpg"
import NightsStayIcon from '@mui/icons-material/NightsStay';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGlobalState } from '../context';


function SideMenu({}) {
  const {theme, toggleTheme, showSideBar, setShowSideBar} = useGlobalState()

  
  const handleToggle = () =>{
    toggleTheme()


  }
  return (
    <Sidebar
    width='90px'
    className={
      showSideBar ? ' max-md:w-[40px] fixed h-[200vh] dark:bg-gray-800 dark:text-white bg-white': 
      'h-[200vh] max-md:w-[40px] max-md:hidden dark:bg-gray-800 dark:text-white bg-white'}

    
    >
          <Menu className={`dark:bg-gray-800 bg-white dark:text-white ${showSideBar ? 'h-screen': 'h-[200vh]'}`}>
            <MenuItem className='pt-4 '><Image src={logo} alt='star' className='h-8 w-8'/></MenuItem>
            <MenuItem className=''><Image src={frame} alt='star' className='h-6 w-8 '/></MenuItem>
            <MenuItem className=''><Image src={box} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem className=''><Image src={contact} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem className=''><Image src={cube} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem className=''><Image src={divide} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem className=''><Image src={exclaim} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            
            <div className='mt-10 rounded-3xl border-y-2 mx-3 bg-white h-20 w-fit'>
              <div className='rounded-3xl bg-white w-fit flex flex-col space-y-2 p-1'>
                <Image src={lightmode} alt='star' className='w-[2rem] h-6 object-contain mt-1 cursor-pointer ' onClick = {() => handleToggle()}/>
                <DarkModeIcon className='text-gray-500 cursor-pointer' onClick = {() => handleToggle()}/>

              </div>
              
            </div>
            

        </Menu>

        {/* <Menu
        rootStyles={{
          [`.${menuClasses.container}`]: {
            backgroundColor: "#FAFAFA"

          }
        }}
        className='mt-6 relative'
        >
          <button className='h-20 w-9 rounded-2xl bg-white ml-[1rem] '> 
            <Image src={star} alt='star' className='h-6 w-6 absolute top-2 left-[1.5rem]'/>
          </button>
          

        </Menu> */}
    </Sidebar>
  )
}

export default SideMenu
