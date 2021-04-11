// eslint-disable-next-line
import * as React from 'react';

// eslint-disable-next-line
// @ts-expect-error
global.___loader = {
  enqueue: jest.fn(),
};

declare global {
  // eslint-disable-next-line
  namespace JSX {
    interface IntrinsicElements {
      // Allow custom elements like <mocked-element />
      // eslint-disable-next-line
      [key: string]: any;
    }
  }
}
