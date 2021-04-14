import * as React from 'react';
import Helmet from 'react-helmet';

type Props = React.PropsWithoutRef<{
  title?: string,
}>;

const Seo: React.FC<Props> = ({ title }: Props) => (
  <Helmet
    titleTemplate="Nicholas Ames -- %s"
    defaultTitle="Nicholas Ames -- Software Engineer"
    title={title}>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta
      httpEquiv="x-ua-compatible"
      content="ie=edge" />
    <meta
      name="description"
      content="Personal site for Nicholas Ames, Software Engineer." />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </Helmet>
);

export default Seo;
