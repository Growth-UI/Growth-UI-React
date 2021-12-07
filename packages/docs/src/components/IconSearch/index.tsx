import copy from 'copy-to-clipboard';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import Input from '@growth-ui/react/elements/Input';
import React, { ChangeEvent, useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';
import stringSimilarity from 'string-similarity';
import useTranslation from 'next-translate/useTranslation';
import { GrowthICONS } from '@growth-ui/react/types';
import { ICONS } from '@growth-ui/react/lib/GUI';

const IconSearch = () => {
  const [copied, setCopied] = useState('');
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCopy = (name: GrowthICONS) => {
    copy(name);
    setCopied(name);
    setTimeout(() => setCopied(''), 1000);
  };

  const renderIconColumn = (name: GrowthICONS) => {
    return (
      <Grid.Col
        key={name}
        horizontalAlign="center"
        minimobile={5}
        mobile={5}
        tablet={4}
        width={3}
        css={`
          cursor: pointer;
          padding: 30px 10px;

          &:hover {
            svg {
              transform: scale(1.5);
            }
          }
        `}
        onClick={() => handleCopy(name)}
      >
        <Icon
          name={name}
          width={30}
          height={30}
          css={`
            transition: transform 0.155s ease-out;
          `}
        />
        <Spacer size={10} />
        <Heading as="h5" textAlign="center">
          {copied === name ? t('common:copied') : name}
        </Heading>
      </Grid.Col>
    );
  };

  const renderIcons = () => {
    const query = search.trim().toLowerCase();

    // no search
    if (!query) {
      return (
        <Grid fluid>
          <Grid.Row verticalAlign="top">
            {ICONS.map((name) => renderIconColumn(name))}
          </Grid.Row>
        </Grid>
      );
    }

    // results
    return (
      <Grid fluid>
        <Grid.Row verticalAlign="top">
          {ICONS.filter((name) => {
            const similarity = stringSimilarity.compareTwoStrings(name, search);

            if (similarity > 0.15) return true;

            return false;
          }).map((name) => renderIconColumn(name))}
        </Grid.Row>
      </Grid>
    );
  };

  return (
    <>
      <Spacer size={30} />
      <Input
        icon="search"
        placeholder={t('common:search')}
        size="sm"
        value={search}
        onChange={handleChange}
      />
      <Spacer size={30} />
      {renderIcons()}
    </>
  );
};

export default IconSearch;
