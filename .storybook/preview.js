// .storybook/preview.js

import { addDecorator } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

addDecorator(
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
  })
);