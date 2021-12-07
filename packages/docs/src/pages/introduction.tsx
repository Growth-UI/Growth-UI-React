import Anchor from '@growth-ui/react/elements/Anchor';
import BasicUsage from 'docs/md/BasicUsage';
import CodeSnippet from 'docs/components/CodeSnippet';
import Divider from '@growth-ui/react/elements/Divider';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import Layout from '../layouts/Layout';
import Link from 'next/link';
import MinHeight from '@growth-ui/react/elements/MinHeight';
import PackageManager from 'docs/md/PackageManager';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';
import Theme from 'docs/md/Theme';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { GetStaticProps } from 'next';

const min = 300;

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Grid>
        <Grid.Row horizontalAlign="center">
          <Grid.Col horizontalAlign="center" minimobile={15} width={13}>
            <Spacer size={100} />

            <Heading as="h1" textAlign="center">
              Growth UI React
              <Spacer size={15} />
              <Heading.Content>{t('introduction:subheading')}</Heading.Content>
            </Heading>

            <Spacer size={100} />

            <Paragraph fontSize="xs">{t('introduction:sponsors')}</Paragraph>

            <Spacer size={50} />

            <Heading as="h2" textAlign="center">
              {t('introduction:jqueryFree')}
              <Spacer size={15} />
              <Heading.Content style={{ fontSize: '14px', lineHeight: 1.5 }}>
                <Trans
                  i18nKey="introduction:jqueryFreeDescription"
                  components={[<br />]}
                />
              </Heading.Content>
            </Heading>

            <Spacer size={50} />

            <Grid.Row centered>
              <Grid.Col
                computer={7}
                widescreen={7}
                width={15}
                style={{ margin: '10px' }}
              >
                <Segment basic secondary>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Col>
                      <Icon name="install" />
                    </Grid.Col>
                    <Spacer size={10} />
                    <Grid.Col>
                      <Heading as="h4">{t('introduction:install')}</Heading>
                    </Grid.Col>
                  </Grid.Row>

                  <Spacer size={30} />

                  <MinHeight min={min}>
                    <CodeSnippet markdown={PackageManager} />

                    <Spacer size={15} />

                    <Paragraph fontSize="sm">
                      {t('introduction:importStyle')}
                    </Paragraph>

                    <Spacer size={15} />

                    <CodeSnippet markdown={Theme} />
                  </MinHeight>

                  <Divider />

                  <Link href="/get-started">
                    <Anchor>
                      <strong>{t('introduction:setup')}</strong>
                    </Anchor>
                  </Link>
                </Segment>
              </Grid.Col>

              {/* <Grid.Col only={['computer', 'widescreen']} width={1}>
              <Spacer size={20} />
            </Grid.Col> */}

              <Grid.Col
                computer={7}
                widescreen={7}
                width={15}
                style={{ margin: '10px' }}
              >
                <Segment basic secondary>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Col>
                      <Icon name="tool outline" />
                    </Grid.Col>
                    <Spacer size={10} />
                    <Grid.Col>
                      <Heading as="h4">{t('introduction:usage')}</Heading>
                    </Grid.Col>
                  </Grid.Row>

                  <Spacer size={30} />

                  <MinHeight min={min}>
                    <CodeSnippet markdown={BasicUsage} />
                  </MinHeight>
                </Segment>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Spacer size={100} />
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Introduction;
