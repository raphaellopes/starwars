// Vendors
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Locals
import { Header } from '~components';
import Characters from '../characters';

export const Main: FC = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Characters} />
      </Switch>
    </Router>
  </>
);
