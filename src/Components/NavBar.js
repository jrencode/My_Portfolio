import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
      <div className="NavBar">
        <nav className="nav">
          <div className="profile">
            <img src={avatar} alt="avatar"/>
          </div>
          <ul className="nav-items">
              <li className="nav-item">
                <NavLink to="/" exact activeClasssName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" exact activeClasssName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" exact activeClasssName="active">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" exact activeClasssName="active">
                  Contact
                </NavLink>
              </li>
          </ul>
          <footer className="footer">
              @2021 Lorem Ipsum
          </footer>
        </nav>
      </div>
  )
}

export default NavBar
