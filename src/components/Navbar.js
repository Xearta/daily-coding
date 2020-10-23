import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Tanner Townsend
          </Link>
          <div className='menu-icon'></div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/log' className='nav-links'>
                Log
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>

            <li>
              <Link to='/sign-up' className='nav-links-mobile'>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
