// Vendors
import React, { FC, Suspense } from 'react';
import { useImage } from 'react-image';

// Locals
import { ImageProps } from '../types';

const Component: FC<ImageProps> = ({ src, ...rest }) => {
  const { src: source, error } = useImage({ srcList: src });

  const renderImage = () => !error && <img src={source} {...rest} />;

  const renderError = () => error && <span>{error}</span>;

  return (
    <>
      {renderImage()}
      {renderError()}
    </>
  );
};

export const Image: FC<ImageProps> = (props) => (
  <Suspense fallback={<span>loading</span>}>
    <Component {...props} />
  </Suspense>
);
