// Vendors
import React, { FC } from 'react';

// Locals
import { Container, Content, SideWrapper } from './styles';
import { ToolbarProps } from './types';

export const Toolbar: FC<ToolbarProps> = ({
  children,
  componentLeft,
  componentRight,
  ...rest
}) => {
  // renders
  const renderIconLeft = () =>
    componentLeft && (
      <SideWrapper>{componentLeft && componentLeft}</SideWrapper>
    );

  const renderIconRight = () =>
    componentRight && (
      <SideWrapper>{componentRight && componentRight}</SideWrapper>
    );

  const renderContent = () => children && <Content>{children}</Content>;

  return (
    <Container {...rest}>
      {renderIconLeft()}
      {renderContent()}
      {renderIconRight()}
    </Container>
  );
};
