import React, { useState } from 'react';
import "./Navbar.css";

import Logo from "../../../assets/img/logo.png";

import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header>
        <div className="container container_fluid">
          <nav>
            <div className="nav_logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className='nav_link_box'>
              <a href="/home">Xizmatlarimiz</a>
              <a href="/home">Biz haqimizda</a>
              <a href="/home">Aloqa</a>
              <select className='nav_select' name="lng" id="1">
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <button>
                +998 97 777 29 29 <br /> Aloqa
              </button>
            </div>
            <div className='open_menu' onClick={() => setOpenMenu(true)} >
              <FaBars />
            </div>
          </nav>

          {openMenu &&
            <div className='nav_link_open_box'>
              <div className='close_menu' onClick={() => setOpenMenu(false)} >
                <IoCloseSharp />
              </div>
              <a href="/home">Xizmatlarimiz</a>
              <a href="/home">Biz haqimizda</a>
              <a href="/home">Aloqa</a>
              <select className='nav_select' name="lng" id="1">
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          }

        </div>
      </header>
    </>
  )
}
