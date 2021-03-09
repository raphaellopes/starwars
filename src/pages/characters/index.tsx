// Vendors
import React, { FC } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Locals
import List from './list';
import Detail from './detail';

const Characters: FC = () => {
  const match = useRouteMatch();
  console.log('>>> Characters', { match });
  return (
    <Switch>
      <Route exact path={match.path} component={List} />
      <Route exact path={`${match.path}/:id`} component={Detail} />
    </Switch>
  );
};

export default Characters;
