// avatar
enum AvatarSizes {
  medium = '40px',
}
const avatar = {
  medium: AvatarSizes.medium,
};

// borderRadius
enum BorderRadiusSizes {
  rounded = '100%',
  small = '2px',
  medium = '4px',
  large = '6px;',
}
export const borderRadius = {
  rounded: BorderRadiusSizes.rounded,
  small: BorderRadiusSizes.small,
  medium: BorderRadiusSizes.medium,
  large: BorderRadiusSizes.large,
};

// paddings
enum PaddingSizes {
  medium = '10px',
}
export const paddings = {
  medium: PaddingSizes.medium,
};

// margins
enum MarginSizes {
  medium = '10px',
}
export const margins = {
  medium: MarginSizes.medium,
};

export const sizes = { avatar, borderRadius, paddings, margins };
