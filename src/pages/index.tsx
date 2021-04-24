import * as React from 'react';

import {
  Seo,
  Header,
  Nav,
  About,
  Employment,
} from 'components';

const IndexPage = (): JSX.Element => (
  <>
    <Seo />
    <Nav />
    <Header />
    <About />
    <Employment />
  </>
);

export default IndexPage;
