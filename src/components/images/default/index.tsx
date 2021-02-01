// Vendors
import React, { FC, Suspense } from 'react';
import { useImage } from 'react-image';

// Locals
import { ImageProps } from '../types';

const Component: FC<ImageProps> = ({ src, ...rest }) => {
  const { src: source, error } = useImage({ srcList: src });

  // @ts-ignore
  const renderImage = () => !error && <img src={source} {...rest} />;

  const renderError = () => error && <span>{error}</span>;

  return (
    <>
      {renderImage()}
      {renderError()}
    </>
  );
};

// @TODO: Check the warning of react suspense use
export const Image: FC<ImageProps> = (props) => (
  <Suspense fallback={() => <span>loading</span>}>
    <Component {...props} />
  </Suspense>
);
