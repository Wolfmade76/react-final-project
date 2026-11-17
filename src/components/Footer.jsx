import React from 'react'
import logo from '../assets/wolf cinema.png'

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="footer__logo">
          <img src={logo} alt="" className='footer__logo--img' />
        </div>
      </div>
    </div>
  )
}

