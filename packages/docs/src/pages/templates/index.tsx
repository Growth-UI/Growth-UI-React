import Card from '@growth-ui/react/views/Card';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import IconButton from '@growth-ui/react/addons/IconButton';
import Layout from '../../layouts/Layout';
import React from 'react';
import Router from 'next/router';
import Spacer from '@growth-ui/react/elements/Spacer';
import useTranslation from 'next-translate/useTranslation';
import { templates } from '../../utils/constants';

const TemplatesPage = () => {
  const { t } = useTranslation();

  const handleClick = (template: string) =>
    Router.push(`/templates/${template}`);

  return (
    <Layout>
      <Grid>
        <Grid.Row horizontalAlign="center">
          <Grid.Col minimobile={15} width={13}>
            <Heading>
              {t('templates:heading')}
              <Heading.Content>{t('templates:subheading')}</Heading.Content>
            </Heading>

            <Spacer size={30} />

            <Card.Group>
              {templates.map((template) => (
                <Card key={template}>
                  <Card.Media
                    src={t(`templates:${template}.image`)}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick(template)}
                  />

                  <Card.Content>
                    <Card.Header>
                      {t(`templates:${template}.title`)}
                    </Card.Header>
                    <Card.Description>
                      {t(`templates:${template}.description`)}
                    </Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <a
                      href={t(`templates:${template}.sourceCode`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton name="github" />
                    </a>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default TemplatesPage;
