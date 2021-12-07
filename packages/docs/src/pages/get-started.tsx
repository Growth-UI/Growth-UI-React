import AutoDarkThemeEnable from 'docs/md/AutoDarkThemeEnable';
import Checkbox from '@growth-ui/react/modules/Checkbox';
import CodeSnippet from 'docs/components/CodeSnippet';
import Context from 'docs/components/Context';
import CustomTheme from 'docs/md/CustomTheme';
import DarkMode from 'docs/md/DarkMode';
import Divider from '@growth-ui/react/elements/Divider';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import Layout from '../layouts/Layout';
import PackageManager from 'docs/md/PackageManager';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useContext } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';
import Theme from 'docs/md/Theme';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { GetStaticProps } from 'next';

const Installation = () => {
  const { darkMode, setDarkMode } = useContext(Context);
  const { t } = useTranslation();

  const onToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout>
      <Grid>
        <Grid.Row horizontalAlign="center">
          <Grid.Col width={15}>
            <Heading>{t('common:getStarted')}</Heading>

            <Spacer size={30} />

            <Heading as="h2">
              <Icon color="red-800" name="npm" width={45} height={45} />
            </Heading>

            <Paragraph>
              <Trans
                i18nKey="get-started:npm.description"
                components={[
                  <span
                    style={{
                      background: 'rgba(255, 229, 100, 0.2)',
                      padding: '0.1em',
                    }}
                  />,
                ]}
              />
            </Paragraph>

            <Spacer size={15} />

            <CodeSnippet markdown={PackageManager} />

            <Spacer size={15} />

            <Paragraph>
              <Trans
                i18nKey="get-started:npm.dependencies"
                components={[
                  <a
                    href="https://styled-components.com"
                    target="_blank"
                    rel="noreferrer"
                  />,
                ]}
              />
            </Paragraph>

            <Spacer size={30} />

            <Heading as="h2">{t('get-started:theme.heading')}</Heading>
            <Spacer size={10} />
            <Paragraph>{t('get-started:theme.description')}</Paragraph>
            <Spacer size={20} />
            <CodeSnippet markdown={Theme} />

            <Spacer size={30} />

            <Grid.Row verticalAlign="middle">
              <Heading as="h3" css="width: fit-content;">
                {t('get-started:darkMode.heading')}
              </Heading>
              <Spacer size={15} />
              <Checkbox toggle checked={darkMode} onChange={onToggle}>
                <Icon name={darkMode ? 'sun' : 'partly sunny'} />
              </Checkbox>
            </Grid.Row>
            <Spacer size={10} />
            <Paragraph>{t('get-started:darkMode.description')}</Paragraph>
            <Spacer size={20} />

            <Grid.Row>
              <Grid.Col width={8} horizontalAlign="center">
                <CodeSnippet padded markdown={AutoDarkThemeEnable} />
              </Grid.Col>
              <Divider vertical css="color: #fff !important;">
                or
              </Divider>
              <Grid.Col width={8} horizontalAlign="center">
                <CodeSnippet padded markdown={DarkMode} />
              </Grid.Col>
            </Grid.Row>

            <Spacer size={30} />

            <Heading as="h3">{t('get-started:custom.heading')}</Heading>
            <Spacer size={10} />
            <Paragraph>{t('get-started:custom.description')}</Paragraph>
            <Spacer size={30} />
            <CodeSnippet markdown={CustomTheme} />
          </Grid.Col>
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

export default Installation;
