import React from 'react';
import "./Navbar.css";

import Logo from "../../../assets/img/logo.png";

export default function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav_box">
            <div className="nav_box_item">
              <a href='#'><img className='nav_logo' src={Logo} alt="" /></a>
            </div>
            <div className="nav_box_item nav_link_box">
              <a href="#" className="nav_link">Hizmatlarimiz</a>
              <a href="#" className="nav_link">Biz haqimizda</a>
              <a href="#" className="nav_link">Aloqa</a>
              <a href="#" className="nav_link nav_lang">
                <select className='nav_select' name="Uz" id="Uz">
                <option value="Uz">UZ</option>
                <option value="Ru">RU</option>
                <option value="Eng">EN</option>
                </select>
              </a>
            </div>
            <div className="nav_box_item">
              <a  href="#" className="nav_link nav_link_contact">93 191 97 37 <span>Aloqa</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
