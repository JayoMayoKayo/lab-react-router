import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WhyUs from './WhyUs';
import FamilyMember from './FamilyMember';
import Family from './Family';

class BrowserRouter extends React.Component {
  render() {
    return (
      <>
        <p>hello worl</p>

        <Router>
          <Route exact path="/" component={WhyUs}></Route>
          <Route exact path="/FamilyMember/" component={FamilyMember}></Route>
          <Route exact path="/Family/" component={Family}></Route>
        </Router>
      </>
    )
  }
}

export default BrowserRouter;
