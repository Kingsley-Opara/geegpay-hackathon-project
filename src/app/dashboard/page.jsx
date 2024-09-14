"use client"
import { GlobalStateProvider } from '../context';
import Image from 'next/image';
import SideMenu from './sidebar'
import React from 'react'
import Main from './main'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(false)
  console.log(showSideBar)


  return (


  <main className="min-h-screen">
    <GlobalStateProvider>
      <div className='flex'>
        <SideMenu show = {showSideBar}/>
        <Main />
        <div className='pt-6 max-sm:ml-[5rem] sm:hidden p-0'>
          {!showSideBar ?<MenuOpenIcon onClick = {() => setShowSideBar(!showSideBar)}/>: <CloseIcon onClick = {() => setShowSideBar(!showSideBar)}/>}
        </div>
      </div>

    </GlobalStateProvider>
    

     

  </main>
      
  )
}

export default Dashboard

