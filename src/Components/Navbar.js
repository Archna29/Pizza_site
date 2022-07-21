// import React from 'react'

import React, { useState, useEffect } from "react";


import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes,
  } from 'react-router-dom'
import Home from './Home';
import Offes from './Offes';
import './CSS/Navbar.css';
import Data from './DATA/navbardata';
export const Navbar = (props) => {


  // const [navSize, setnavSize] = useState("10rem");
  // const [navColor, setnavColor] = useState("transparent");
  // const listenScrollEvent = () => {
  //   window.scrollY <100 ? setnavColor("#252734") : setnavColor("white");
  //   window.scrollY < 30 ? setnavSize("5rem") : setnavSize("10rem");
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, []);
  
  return (
    <> 
<div className='bg-img'>

<Router>
<nav class="navbar navbar-expand-lg ">
  <div className="container-fluid" id ="Navbar">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
      <h6><NavLink className="nav-link" to='/'>HOME</NavLink></h6>
        </li>
        <li className="nav-item">
        <h6><NavLink className="nav-link" to='/offes'>PAGES</NavLink></h6> </li>
       {Data.map((item)=>

          <li className="nav-item dropdown ">
    
         <a className="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button"   data-bs-toggle="dropdown"  aria-expanded="false">
       <h6>  {item.title}</h6>
          </a> 
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
    {/* Mapping of dropdown data */}
           {item.dropdowndata.map((d)=>
            <li><a class="dropdown-item" href="#">{d}</a></li>
          
           )}
          </ul>
         
        
         </li>
      )
        }  

      </ul>
    </div>
  </div>
 </nav>

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/offes" element={<Offes/>}/>
</Routes>
</Router>

{/* <div className="col-md-5" id ="content">
<h4 className="card-title" >FAST FOOD PIZZAS</h4>
<h3><p  className='card-text'>
BEST PIZZAS IN GALAXY
</p>
</h3>
<button type="button" class="btn btn-danger btn-lg">Large button</button>
</div> */}

<div className="card" >
<div className="card-body">
    <h4 className="card-title text-white">FAST FOOD PIZZAS</h4>
    <h2><p className="card-title text-white">BEST PIZZAS IN GALAXY</p></h2>
    <button type="button" id ="button"><span>OUR MENU</span></button>
  </div>
</div>
</div>
    </>
 
  )
}



export default Navbar;
