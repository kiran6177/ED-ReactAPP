import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import useMediaQuery from '../hooks/mediaQuery';
import { IoClose } from 'react-icons/io5';

function Header() {

    const isMobile = useMediaQuery('(max-width:640px)')
    const [view,setView] = useState(false);
    const navigate = useNavigate();
    
  return (
    <div className='header'>
      <div className='left-header'>
      <h2 onClick={()=>navigate('/')}>LOGO</h2>
      {!isMobile && <div className='nav-links'>
        <NavLink to={'/one'} >One</NavLink>
        <NavLink to={'/two'} >Two</NavLink>
        <NavLink to={'/three'} >Three</NavLink>
      </div>}
      </div>
      {isMobile &&<div>
        <GiHamburgerMenu onClick={()=>setView(!view)} />
      </div>}
      {
        view && isMobile &&
        <div className='slide-nav'>
            <IoClose onClick={()=>setView(!view)} style={{position:'absolute', top:'1rem', right:'1rem'}}/>
            <NavLink to={'/one'} >One</NavLink>
            <NavLink to={'/two'} >Two</NavLink>
            <NavLink to={'/three'} >Three</NavLink>
        </div>
      }
    </div>
  )
}

export default Header