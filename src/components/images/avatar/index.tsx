// Locals
import { styled, sizes } from '~styles';
import { Image } from '../default';

interface AvatarProps {
  size?: keyof typeof sizes.avatar;
}
export const Avatar = styled(Image)<AvatarProps>`
  ${({ size = 'medium', theme: { sizes } }) => `
    width: ${sizes.avatar[size]};
    height: ${sizes.avatar[size]};
    border-radius: ${sizes.borderRadius.rounded};
    object-fit: cover;
  `}
`;
