import Checkbox from '@growth-ui/react/modules/Checkbox';
import ComponentSearch from '../ComponentSearch';
import Container from '@growth-ui/react/elements/Container';
import Context from '../Context';
import Dropdown, { DropdownItemProps } from '@growth-ui/react/modules/Dropdown';
import Grid from '@growth-ui/react/collections/Grid';
import Icon from '@growth-ui/react/elements/Icon';
import Input from '@growth-ui/react/elements/Input';
import Router from 'next/router';
import Spacer from '@growth-ui/react/elements/Spacer';
import useTranslation from 'next-translate/useTranslation';
import React, {
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  availableLanguages,
  growthUIRepoURL,
  getOperatingSystem,
} from '../../utils';

type Props = {
  children?: ReactNode;
};

const iconStyle = {
  cursor: 'pointer',
  width: '30px',
  height: '30px',
};

const Navbar = ({ children }: Props) => {
  const [os, setOS] = useState<string>();
  const { darkMode, setDarkMode } = useContext(Context);
  const { t } = useTranslation('common');

  useEffect(() => {
    setOS(getOperatingSystem());
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleAddItem = (_: MouseEvent, { value }: DropdownItemProps) => {
    const { asPath, push } = Router;

    push(asPath, asPath, { locale: value as string });
  };

  return (
    <Container as="nav" fluid shadow>
      <Grid css="padding: 1rem;">
        <Grid.Row verticalAlign="middle" horizontalAlign="space-between">
          <Grid.Col>{children}</Grid.Col>
          <Grid.Col>
            <Grid.Row verticalAlign="middle">
              <Grid.Col only={['tablet', 'laptop', 'computer', 'widescreen']}>
                <ComponentSearch
                  trigger={
                    <Input
                      filled
                      icon="search"
                      placeholder={`${t('search')}  ${
                        os === 'Mac' ? '⌘K' : 'Ctrl K'
                      }`}
                      size="sm"
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col>
                <Spacer size={15} />
              </Grid.Col>
              <Grid.Col>
                <Grid.Row verticalAlign="middle">
                  <Icon name="language" width={20} />
                  <Spacer size={5} />
                  <Dropdown
                    icon
                    simple
                    space
                    defaultValue={availableLanguages[0].language}
                    options={availableLanguages.map(({ language, locale }) => ({
                      value: locale,
                      text: language,
                    }))}
                    onAddItem={handleAddItem}
                  />
                </Grid.Row>
              </Grid.Col>
              <Grid.Col>
                <Spacer size={15} />
              </Grid.Col>
              <Grid.Col>
                <Checkbox toggle checked={darkMode} onChange={handleToggle}>
                  <Icon name={darkMode ? 'sun' : 'partly sunny'} />
                </Checkbox>
              </Grid.Col>
              <Grid.Col>
                <Spacer size={15} />
              </Grid.Col>
              <Grid.Col>
                <a href={growthUIRepoURL} target="_blank" rel="noreferrer">
                  <Icon name="github" style={iconStyle} />
                </a>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Navbar;
