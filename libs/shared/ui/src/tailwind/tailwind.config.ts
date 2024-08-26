import { darkTheme, lightTheme } from '../config';

import { adaptTailwindTheme } from './adapt-tailwind-theme';

const tailwindTheme = adaptTailwindTheme(lightTheme, darkTheme);

module.exports = {
  theme: tailwindTheme,
};
