import React from 'react'
import { Outlet } from 'react-router-dom'
import './navbar.css'
import {  Link} from "react-router-dom";

export default function Navbar(props) {


  return (
    <>
      <div className='Nav'>
        <div className='leftspace'></div>
        <div>
        <Link to="/">Break your Fast</Link>
        </div>
        <div>
          <a href="#lunch">Time for Lunch</a>
        </div>
        <div>
          <a href="#0">Dinner</a>
        </div>
        <div>
          <a href="#0">Burger and Beverages</a>
        </div>
        <div>
          <a href="#0">More..</a>
        </div>
        <div className='rightspace'></div>
      </div>
      <Outlet/>
    </>
    
  )
}
