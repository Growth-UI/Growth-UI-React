import React from 'react';
import redirect from 'docs/utils/redirect';
import { NextPageContext } from 'next';

const location = '/introduction';

function IndexPage() {
  return <></>;
}

IndexPage.getInitialProps = (ctx: NextPageContext) => {
  redirect(ctx, location);
};

export default IndexPage;
