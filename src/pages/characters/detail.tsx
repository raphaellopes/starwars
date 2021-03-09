// Vendors
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { Title, Text, Container } from '~components';

const CharactersDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { byId, dispatchers, loading } = useCharacterHook();
  const data = byId(id);

  const { name, gender, hair_color, height, mass } = data || {};

  useEffect(() => {
    if (!data) {
      dispatchers.request(id);
    }
  }, [data]);

  // renders
  const renderContent = () =>
    !loading && (
      <>
        <Title>{name}</Title>
        <Text>
          <strong>gender:</strong> {gender}
        </Text>
        <Text>
          <strong>hair_color:</strong> {hair_color}
        </Text>
        <Text>
          <strong>height:</strong> {height}
        </Text>
        <Text>
          <strong>mass:</strong> {mass}
        </Text>
      </>
    );

  return <Container>{renderContent()}</Container>;
};

export default CharactersDetail;
