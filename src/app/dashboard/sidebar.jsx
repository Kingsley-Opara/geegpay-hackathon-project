"use client"
import Image from 'next/image'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from "../images/logo.png"
import frame from "../images/frame.png"
import box from "../images/box.png"
import contact from "../images/contact.png"
import cube from "../images/cube.png"
import divide from "../images/divide.png"
import exclaim from "../images/exclaim.png"
import star from "../images/star.png"

function SideMenu({show}) {
  return (
    <Sidebar
    width='90px'
    className={show ? 'min-h-screen max-md:w-[40px]': 'min-h-screen max-md:w-[40px] max-sm:hidden'}

    
    >
          <Menu>
            <MenuItem className='pt-4'><Image src={logo} alt='star' className='h-8 w-8'/></MenuItem>
            <MenuItem><Image src={frame} alt='star' className='h-6 w-8 '/></MenuItem>
            <MenuItem><Image src={box} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem><Image src={contact} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem><Image src={cube} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem><Image src={divide} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>
            <MenuItem><Image src={exclaim} alt='star' className='h-8 w-[5rem] ml-[-1rem]'/></MenuItem>

        </Menu>
        <Menu className='mt-10 '>
          <MenuItem className=''></MenuItem>

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
