import * as React from 'react';

import {
  Seo,
  Header,
  Nav,
  About,
  Employment,
  Footer,
} from 'components';

const IndexPage = (): JSX.Element => (
  <>
    <Seo />
    <Nav />
    <Header />
    <About />
    <Employment />
    <Footer />
  </>
);

export default IndexPage;
