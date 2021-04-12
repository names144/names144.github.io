import * as React from 'react';

import {
  Seo,
  Header,
} from 'components';

const IndexPage = (): JSX.Element => (
  <>
    <Seo />
    <div className="container-fluid">
      <Header />
    </div>
  </>
);

export default IndexPage;
