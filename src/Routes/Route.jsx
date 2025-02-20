import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainHome from '../Pages/MainHome'
import Home from '../Components/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

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
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])




export default router