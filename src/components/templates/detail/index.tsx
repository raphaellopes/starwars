// Vendors
import React, { FC } from 'react';

// Locals
import { Title, Text, Container } from '~components';
import { DetailProps } from './types';

export const Detail: FC<DetailProps> = ({ title, characteristics }) => {
  // renders
  const renderCharacteristic = ([key, value]: string[], index: number) => (
    <Text key={`characteristic-${index}`}>
      <strong>{key}:</strong> {value}
    </Text>
  );

  const renderContent = () => (
    <>
      <Title>{title}</Title>
      <>{Object.entries(characteristics).map(renderCharacteristic)}</>
    </>
  );

  return <Container>{renderContent()}</Container>;
};
