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
        <Route path="/characters" component={Characters} />
        <Route path="/species" component={Species} />
      </Switch>
    </Router>
  </>
);
