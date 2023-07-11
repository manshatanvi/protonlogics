import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../themes/index/Home';
import Services from '../pages/services/Services';
import NotFoundScreen from '../components/others/NotFoundScreen';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ScrollToTop from '../components/common/ScrollToTop';

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about-us' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact-us' component={Contact} />                        
            <Route path='/*' component={NotFoundScreen} />
            {/* <Route component={NotFoundScreen} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
