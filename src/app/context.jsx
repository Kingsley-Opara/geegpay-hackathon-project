'use client'
import {createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{

    const [state, setState] = useState({
        theme: 'light',
        toggle: false,

    })

    const updateToggle = (toggle) => setState({...state, toggle})
    useEffect(() =>{
        if (state.toggle === true){
            localStorage.setItem('theme', 'dark')
    
        } else{
            localStorage.setItem('theme', 'light')
        }
    

    }, [state])
    


    const updateTheme = () => setState({...state, theme:localStorage.getItem('theme')})

    return(
        <GlobalStateContext.Provider value={{state, updateToggle, updateTheme}}>
            {children}

        </GlobalStateContext.Provider>
    )
    
}

export const useGlobalState = () =>useContext(GlobalStateContext)