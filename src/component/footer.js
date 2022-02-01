import React, { Component, Fragment } from "react";
import {
  Link
} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
      <footer className="footer-box">
        <div className="container">
            <div className="row">
                <div className="col-md-12 margin-bottom_30">
          <img src="img/logo-footer.svg" alt="#" className="crux__logo" />
        </div>
              <div className="col-xl-6 white_fonts">
                    <div className="row">
          <div className="col-md-12 white_fonts margin-bottom_30">
            <h3>Contact Us</h3>
          </div>
                        <div className="col-md-4">
                            <div className="full icon">
                                <img src="images/social1.png" />
                            </div>
                            <div className="full white_fonts">
                                <p>307, Balaji hall
                                    <br />Mahapujadham chowk<br />Rajkot</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="full icon">
                                <img src="images/social2.png" />
                            </div>
                            <div className="full white_fonts">
                                <p>hr@cruxitweb.com</p>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="full icon">
                                <img src="images/social3.png" />
                            </div>
                            <div className="full white_fonts">
                                <p>+918980397988‬</p>
                            </div>
                        </div>
            <div className="col-md-12">
              <ul className="full social_icon margin-top_20">
                                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
            </div>
                    </div>
                </div>

        <div className="col-xl-6 white_fonts">
            <div className="row">
            <div className="col-md-6">
              <div className="footer_blog footer_menu">
                <h3>Menus</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>

            </div>

          </div>
        </div>

            </div>

        </div>
    </footer>

    <div className="footer_bottom">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <p className="crp">© 2021 Business . All Rights Reserved.</p>
                  <ul className="bottom_menu">
                      <li><Link to="/">Term of Service</Link></li>
                      <li><Link to="/">Privacy</Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    </Fragment>
    )
  }
}

export default Footer;

