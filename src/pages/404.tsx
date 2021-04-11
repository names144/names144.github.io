import * as React from 'react';

import Seo from 'components/Seo';

jest.mock('components/Seo');

const NotFoundPage = (): JSX.Element => (
  <div>
    <Seo title="404" />
    <h1>404: Not Found</h1>
  </div>
);

export default NotFoundPage;
