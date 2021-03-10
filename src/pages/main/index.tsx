// Vendors
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Locals
import { Header } from '~components';
import Characters from '../characters';
import Species from '../species';
import { Home } from './home';

export const Main: FC = () => {
  // renders
  const renderRoutes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={Characters} />
      <Route path="/species" component={Species} />
    </Switch>
  );

  return (
    <Router>
      <Header />
      {renderRoutes()}
    </Router>
  );
};
