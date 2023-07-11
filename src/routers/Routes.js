import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../themes/index/Home";
import Services from "../pages/services/Services";
import NotFoundScreen from "../components/others/NotFoundScreen";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/common/ScrollToTop";

class Routes extends Component {
  render() {
    const host = process.env.PUBLIC_URL;
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route
              exact
              path="/"
              render={() => <Redirect to={`${host}/home`} />}
            />
            <Route exact path={`${host}/home`} component={Home} />
            <Route exact path={`${host}/about-us`} component={About} />
            <Route exact path={`${host}/services`} component={Services} />
            <Route exact path={`${host}/contact-us`} component={Contact} />
            <Route path={`${host}/*`} component={NotFoundScreen} />
            {/* <Route component={NotFoundScreen} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
