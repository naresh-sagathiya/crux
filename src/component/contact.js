import React, { Component } from 'react';
import ContactForm from "./contact-form";

class Contact extends Component{
   render(){
      return(
         <div className="inner_page">
            <div className="section inner_page_header">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                     <div className="full">
                        <h3>Contact</h3>
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
                           <p className="small_tag">Contact</p>
                                 <h2><span className="theme_color">How to provide</span> tools that help anyone give a voice to their ideas</h2>
                              </div>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div className="row margin-top_30">
                     <div className="col-lg-7 col-sm-7 col-xs-12 margin-top_30">
                        <div className="contact-block">
                           <ContactForm />
                        </div>
                     </div>
                     <div className="col-lg-5 col-sm-5 col-xs-12 margin-top_30">
                        <div className="left-contact">
                           <div className="media cont-line">
                              <div className="media-left icon-b">
                                 <i className="fa fa-location-arrow" aria-hidden="true"></i>
                              </div>
                              <div className="media-body dit-right">
                                 <h4>Address</h4>
                                 <p>307, Balaji hall, mahapujadham chowk<br />
                                    150 feet road, rajkot<br />
                                    RAJKOT, GUJARAT 360001</p>
                              </div>
                           </div>
                           <div className="media cont-line">
                              <div className="media-left icon-b">
                                 <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <div className="media-body dit-right">
                                 <h4>Email</h4>
                                 <a href="mailto:hr@cruxitweb.com">hr@cruxitweb.com</a>
                              </div>
                           </div>
                           <div className="media cont-line">
                              <div className="media-left icon-b">
                                 <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                              </div>
                              <div className="media-body dit-right">
                                 <h4>Phone Number</h4>
                                 <a href="tel:+918980397988‬">+91 8980397988‬</a><br />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default Contact;
