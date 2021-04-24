import * as React from 'react';

import { Seo } from 'components';

const NotFoundPage = (): JSX.Element => (
  <>
    <Seo title="404" />
    <div className="container tw-flex tw-items-center tw-flex-col tw-justify-center tw-h-screen tw-overflow-hidden">
      <h1 className="tw-text-3xl tw-uppercase">404</h1>
      <p className="tw-py-8">Looks like there is nothing here. Click the link below to go back home.</p>
      <a href="/">Go Home</a>
    </div>
  </>
);

export default NotFoundPage;
