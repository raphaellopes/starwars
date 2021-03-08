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
  huge = '100px',
}
export const borderRadius = {
  rounded: BorderRadiusSizes.rounded,
  small: BorderRadiusSizes.small,
  medium: BorderRadiusSizes.medium,
  large: BorderRadiusSizes.large,
  huge: BorderRadiusSizes.huge,
};

// icons
enum IconSizes {
  large = '24px',
}

export const icons = {
  large: IconSizes.large,
};

// paddings
enum PaddingSizes {
  medium = '10px',
  large = '15px',
  xLarge = '20px',
}
export const paddings = {
  medium: PaddingSizes.medium,
  large: PaddingSizes.large,
  xLarge: PaddingSizes.xLarge,
};

// margins
enum MarginSizes {
  medium = '10px',
}
export const margins = {
  medium: MarginSizes.medium,
};

// screens
enum ScreenSizes {
  small = '420px',
}

export const mediaScreens = {
  small: `(min-width: ${ScreenSizes.small})`,
};

export const sizes = {
  avatar,
  borderRadius,
  icons,
  paddings,
  margins,
  mediaScreens,
};
