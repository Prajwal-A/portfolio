import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/happy-boy.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Prajwal G Alewoor</h1>
        <h5 className="text-light">Studying ISE from BMSCE</h5>
        <CTA />
        <HeaderSocial />
        <div className="me fade-in">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header
