import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainHome from '../Pages/MainHome'
import Home from '../Components/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

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
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
])




export default router