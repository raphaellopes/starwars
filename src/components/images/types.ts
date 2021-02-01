// Vendors
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type BaseImageType = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export interface ImageProps extends BaseImageType {}
