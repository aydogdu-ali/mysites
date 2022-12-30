import React from 'react'
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const Router = () => {
  return (
    <BrowserRouter>
   <Navbar/>
<Routes>

<Route path='/' element = {<Home/>}/>

</Routes>


   
    
    
    
    
    
    </BrowserRouter>
   
  )
}

export default Router