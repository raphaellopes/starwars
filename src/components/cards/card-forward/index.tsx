// Vendors
import React, { FC } from 'react';

// Locals
import { Container, Text, Icon } from './styles';
import { CardForwardProps } from './types';

export const CardForward: FC<CardForwardProps> = ({ text, ...rest }) => {
  // renders
  const renderIcon = () => <Icon name="arrow-forward" />;

  const renderText = () => <Text>{text}</Text>;

  return (
    <Container {...rest}>
      {renderText()}
      {renderIcon()}
    </Container>
  );
};
