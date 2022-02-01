import React, { Component } from 'react';
class About extends Component{
   render(){
      return(
         <div className="inner_page">
            <div className="section inner_page_header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <div className="full">
                    <h3>About us</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="heading_main text_align_left">
                              <div className="left">
                                <p className="section_count">01</p>
                              </div>
                              <div className="right">
                                <p className="small_tag">About us</p>
                                <h2><span className="theme_color">WE CAN</span> HELP YOUR business GROW</h2>
                                <p className="large">Get your Business in 4 easy steps</p>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="section dark_bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 text_align_center padding_0">
                        <div className="full">
                            <img className="img-responsive" src="img/img-2png.png" alt="#" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 white_fonts layout_padding padding_left_right">
                        <h3 className="small_heading">EVERYTHING<br />YOU NEED IN ONE SOLUTION</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                          content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                          their default model..
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
   }
}
export default About;
