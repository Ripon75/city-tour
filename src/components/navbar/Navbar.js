import React from 'react';
import './Navbar.scss'
import logo from '../../logo.png'
import {NavLink} from 'react-router-dom'
 
const Navbar = () => {

   


    return (
        <div className='navbar'>
            {/* <nav className='navbar'>
               <img src={logo} alt='tour logo'/>
               <ul className='nav-links'>
                   <li><a href='/' className='nav-link'>Home</a></li>
                   <li><a href='/' className='nav-link'>About</a></li>
                   <li><a href='/' className='nav-link active'>Tour</a></li>
               </ul>              
            </nav> */}
               <img src={logo} alt='tour logo'/>
               <div className='nav-links'>
               <NavLink  exact to="/" className='nav-link'>Home</NavLink>
               <NavLink  to="/about" className='nav-link'>About</NavLink>
               <NavLink  to="/contact" className='nav-link'>Contact</NavLink>
               <NavLink  to="/tourlist" className='nav-link'>Tourlist</NavLink>
               </div>
               
        </div>
    );
};

export default Navbar;