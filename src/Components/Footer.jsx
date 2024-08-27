import React from 'react'
import useMediaQuery from '../hooks/mediaQuery';

function Footer() {

    const isMobile = useMediaQuery('(max-width:640px)');
    const isTablet = useMediaQuery('(min-width:640px) and (max-width:1024px)')

  return (
    <div className={`footer ${isMobile && 'footer-mob'} ${isTablet && 'footer-tab'}`}>
      <h3>THIS IS FOOTER</h3>
    </div>
  )
}

export default Footer
