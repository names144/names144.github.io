import * as React from 'react';

import {
  Seo,
  Header,
  Nav,
} from 'components';

const IndexPage = (): JSX.Element => (
  <>
    <Seo />
    <div className="container-fluid">
      <Nav />
      <Header />
    </div>
  </>
);

export default IndexPage;
