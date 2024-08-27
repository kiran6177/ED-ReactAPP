import React from 'react'
import useMediaQuery from '../hooks/mediaQuery'

function Home() {

    const isMobile = useMediaQuery('(max-width:640px)');
    const isTablet = useMediaQuery('(min-width:640px) and (max-width:1024px)')
    
  return (
    <div className={`home ${isMobile && 'home-mob'} ${isTablet && 'home-tab'}`}>
        <h1>HOME</h1>
        <h2>Navigate to get advices</h2>
    </div>
  )
}

export default Home
