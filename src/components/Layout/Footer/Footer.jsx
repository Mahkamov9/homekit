import React from 'react';
import "./Footer.css";

import Logo from "../../../assets/img/logo.png";


export default function footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div>
            <img className='footer_logo' src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  )
}
