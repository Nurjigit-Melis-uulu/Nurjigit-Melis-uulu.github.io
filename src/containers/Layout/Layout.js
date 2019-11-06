import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../../components/Pages/Home/Home";
import classes from "./Layout.module.css";
import Nav from "../../components/Nav/Nav";
import Services from "../../components/Pages/Services/Services";
import Works from "../../components/Pages/Works/Works";
import About from "../../components/Pages/About/About";
import Contacts from "../../components/Pages/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Layout}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Works" exact component={Works} />
        <Route path="/About" exact component={About} />
        <Route path="/Contacts" exact component={Contacts} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
