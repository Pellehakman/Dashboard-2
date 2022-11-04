import React from 'react';
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

            <NavLink className={({ isActive }) => (isActive ?  'nav-item active' : 'nav-item inactive drop')} to="/dashboard">
                
                <span>DASHBOARD</span>
                
               
                
            
            
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item inactive drop')} to="/inbox">
               <span>INBOX</span>
               <div className='drop'>
                <Link className='drop-item' to='#'>Inbox</Link>
                <Link className='drop-item'  to='#'>Inbox</Link>
                <Link className='drop-item'  to='#'>Inbox</Link>
                <Link className='drop-item'  to='#'>Inbox</Link>
                </div>
                </NavLink>

            
            
                
            </ul>

            <div className='nav-account-container'>

            </div>
        </nav>
    );
};

export default Nav;