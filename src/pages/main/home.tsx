// Vendors
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { routes, RouteType } from '~shared';
import { Container, CardForward } from '~components';

export const Home: FC = () => {
  const history = useHistory();

  // renders
  const renderPage = (page: RouteType, index: number) => (
    <CardForward
      key={`card-item-${index}`}
      text={page.label}
      onClick={() => history.push(page.path)}
    />
  );

  return <Container>{routes.map(renderPage)}</Container>;
};
