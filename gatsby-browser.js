/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import * as React from 'react';
import './src/styles/global.css';

import ThemeProvider from './src/providers/ThemeProvider';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
wrapRootElement.displayName = 'RootElement';
