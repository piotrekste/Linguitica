import React from 'react';
import HomepageContent from './HomepageContent';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login';
import Flashsets from '../Flashsets';
import Statistics from '../Statistics';

const Homepage = () => {
  return (
    <div className="HomepageContent">
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={HomepageContent} />
        <Route exact path="/flashsets" component={Flashsets} />
        <Route exact path="/statistics" component={Statistics} />
      </BrowserRouter>
    </div>
  );
};

export default Homepage;
