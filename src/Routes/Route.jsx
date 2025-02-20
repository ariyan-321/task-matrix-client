import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainHome from '../Pages/MainHome'
import Home from '../Components/Home'

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainHome></MainHome>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])




export default router