import React from 'react';
import './Navbar.css';
import yinengLogo from '../../yineng_logo_white.png';

class Navbar extends React.Component {
  render() {
    return(
      <div className="nav_container">
        <a><img src={yinengLogo} className="logo" alt="" /></a>
      </div>
    )
  }
}

export default Navbar;
