import React from 'react';
import TemplatesLayout from 'docs/components/TemplatesLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { templates } from '../../utils/constants';

interface Params extends ParsedUrlQuery {
  template: string;
}

type Props = {
  template: string;
};

const TemplatePage = ({ template }: Props) => (
  <TemplatesLayout template={template} />
);

export const getStaticPaths: GetStaticPaths = ({ locales = [] }) => {
  const paths = templates.flatMap((template) =>
    locales.map((locale) => ({ params: { template }, locale })),
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const { template } = ctx.params as Params;

  return {
    props: {
      template,
    },
  };
};

export default TemplatePage;
