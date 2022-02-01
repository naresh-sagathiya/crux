import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/app";
import Contact from "./component/contact";
import About from "./component/about";
import Header from "./component/header";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
