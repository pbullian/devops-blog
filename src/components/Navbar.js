import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" title="Logo">
          <img src={logo} alt="A Devops World" style={{ height: '70px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About Me
        </Link>
        <Link className="navbar-item" to="/">
          Blog
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
