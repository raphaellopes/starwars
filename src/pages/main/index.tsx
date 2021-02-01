// Vendors
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Locals
import { Header } from '~components';
import Characters from '../characters';
import Species from '../species';

export const Main: FC = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/species" component={Species} />
      </Switch>
    </Router>
  </>
);
