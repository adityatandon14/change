import React from 'react';
import { Home } from './Home';
import { About } from './About';
import Contact from './Contact';

import { Switch, Route } from 'react-router-dom';
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
