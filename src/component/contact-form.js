import React, { Component } from "react";

class ContactForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log("Contact us form submit>>>>>");
  };

  render() {
    return (
      <form id="contactForm" onSubmit={this.handleSubmit} method="post">
        <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                  <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                  <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                  <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                  <input type="text" placeholder="Your number" id="number" className="form-control" name="number" required data-error="Please enter your number" />
                  <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required />
                  <div className="help-block with-errors" />
              </div>
              <div className="submit-button text-center">
                  <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
              </div>
            </div>
        </div>
      </form>
    )
  }
}

export default ContactForm;
