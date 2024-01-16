'use client';
import Error from 'next/error';

import type { NextPage, NextPageContext } from 'next';
interface Props {
  statusCode?: number;
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  return statusCode ? <Error {...{ statusCode }} /> : <p>An error occurred on client</p>;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
