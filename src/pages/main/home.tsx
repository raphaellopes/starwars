// Vendors
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { Container, CardForward } from '~components';

export const Home: FC = () => {
  const history = useHistory();
  console.log({ history });
  const pages = [
    {
      label: 'Characters',
      route: 'characters',
    },
    {
      label: 'Species',
      route: 'species',
    },
  ];

  // renders
  const renderPage = (page: any, index: number) => (
    <CardForward
      key={`card-item-${index}`}
      text={page.label}
      onClick={() => history.push(page.route)}
    />
  );

  return <Container>{pages.map(renderPage)}</Container>;
};
