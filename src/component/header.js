import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header className="top-header">
          <nav className="navbar header-nav navbar-expand-lg">
              <div className="container-fluid">
                  <Link to="/" className="navbar-brand"><img src="img/logo.svg" alt="image" className="crux__logo" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                      <ul className="navbar-nav">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact us</Link></li>
                      </ul>
                  </div>
                  <div className="search-box">
                      <input type="text" className="search-txt" placeholder="Search" />
                      <a className="search-btn">
                          <img src="images/search_icon.png" alt="#" />
                      </a>
                  </div>
              </div>
          </nav>
      </header>
    )
  }
}

export default Header;

