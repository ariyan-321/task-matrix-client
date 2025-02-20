import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainHome from '../Pages/MainHome'
import Home from '../Components/Home'
import About from '../Pages/About'

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainHome></MainHome>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])




export default router