import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/frenzy-fantasia.png';

function disableHold(e) {
  e.preventDefault()
}

function NavBar() {
  let [toggle, setToggle] = React.useState(false);
  let handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="hamburger-menu">
          <input type="checkbox" id="navbar-toggle" name="navbar-toggle" onChange={handleToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={toggle ? "navbar-list" : "navbar-list terbuka"}>
          <li>Advanced<br /> Search</li>
          <li>Content</li>
          <li>News</li>
          <li>FAQ</li>
          <li>Help & <br />Support</li>
          <li>Settings</li>
        </ul>
        <Link to="/" onContextMenu={disableHold} className="navbar-logo">
          <img src={logo} alt="FF Logo"/>
        </Link>
        <div className="account">
          <Link to="/user/signin" onContextMenu={disableHold} className="sign-in">
            sign-in
          </Link>
          <Link to="/user/signup" onContextMenu={disableHold} className="sign-up">
            sign-up
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar