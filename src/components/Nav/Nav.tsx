import React, { useState } from 'react';
import "./Nav.scss"
import logo from '../../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import '../../styles/variables.scss'



const Nav = () => {
    return (
        <nav className='Nav-container'>
            <div className='logo-container'>
                <figure className='img-container'><img src={logo} alt="" /></figure>
                    <h1 className='logo-text'>MUSIC MANAGER</h1>
                <figure className='logo-underline'></figure>
            </div>

            <ul className='nav-items-container'>
                <NavLink className={({ isActive }) => (isActive ?  'active' : 'inactive')} to="/dashboard">
                    <span className='nav-item'>DASHBOARD</span>
                </NavLink>

                <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/inbox">
                    <span className='nav-item'>INBOX</span>
                      
                        <ul className='drop'>
                            <Link className='drop-item' to='#'>Inbox</Link>
                            <Link className='drop-item'  to='#'>Draft</Link>
                            <Link className='drop-item'  to='#'>Sent</Link>
                            <Link className='drop-item'  to='#'>Archive</Link>
                            <Link className='drop-item'  to='#'>Removed</Link>
                        </ul>
                   
                </NavLink>

                <NavLink className={({ isActive }) => (isActive ?  'active' : 'inactive')} to="/calender">
                    <span className='nav-item'>CALENDER</span>
                </NavLink>

                <NavLink className={({ isActive }) => (isActive ?  'active' : 'inactive')} to="/artist">
                    <span className='nav-item'>ARTIST</span>
                </NavLink>


                

            
            
                
            </ul>

            <div className='nav-account-container'>

            </div>
        </nav>
    );
};

export default Nav;