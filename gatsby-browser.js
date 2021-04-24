/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import * as React from 'react';
// Polyfill IntersectionObserver API
import 'intersection-observer';

import './src/styles/global.css';

import { ThemeProvider } from './src/providers';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
wrapRootElement.displayName = 'RootElement';
