import Anchor from '@growth-ui/react/elements/Anchor';
import capitalize from 'docs/utils/capitalize';
import Image from '@growth-ui/react/elements/Image';
import Link from 'next/link';
import List from '@growth-ui/react/elements/List';
import React, { FC } from 'react';
import Sidebar, { SidebarProps } from '@growth-ui/react/modules/Sidebar';
import Spacer from '@growth-ui/react/elements/Spacer';
import useTranslation from 'next-translate/useTranslation';
import { componentByType, typeOrder } from 'docs/utils/constants';
import { useRouter } from 'next/router';

type Props = {
  animation: 'overlay' | 'push';
  version: string;
};

const VerticalSidebar: FC<SidebarProps & Props> = (props) => {
  const { version, ...rest } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const renderMenuItemsByType = () =>
    typeOrder.map((nextType) => {
      const items = componentByType[nextType]?.map((item) => (
        <List.Item key={item}>
          <Link href={`/${item}`}>
            <Anchor>
              {item === router.query.component ? (
                <strong>{t(`examples:${item}.heading`)}</strong>
              ) : (
                t(`examples:${item}.heading`)
              )}
            </Anchor>
          </Link>
        </List.Item>
      ));

      return (
        <List.Item key={nextType}>
          <List.Content>
            <List.Heading as="h4">{capitalize(nextType)}</List.Heading>
            <List>{items}</List>
          </List.Content>
        </List.Item>
      );
    });

  const { pathname } = router;

  return (
    <Sidebar {...rest}>
      <List relaxed verticalAlign="middle">
        <List.Item>
          <Image avatar lazy={false} size="mini" src="/images/logo.png" />
          &nbsp;&nbsp;
          <strong>Growth UI React</strong>&nbsp;&nbsp;
          <small>v</small>
          {version}
        </List.Item>
        <List.Item>
          <Spacer size={5} />
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Heading as="h4">{t('common:gettingStarted')}</List.Heading>
            <List>
              <List.Item>
                <Link href="/introduction">
                  <Anchor>
                    {pathname === '/introduction' ? (
                      <strong>{t('common:introduction')}</strong>
                    ) : (
                      t('common:introduction')
                    )}
                  </Anchor>
                </Link>
              </List.Item>
              <List.Item>
                <Link href="/get-started">
                  <Anchor>
                    {pathname === '/get-started' ? (
                      <strong>{t('common:getStarted')}</strong>
                    ) : (
                      t('common:getStarted')
                    )}
                  </Anchor>
                </Link>
              </List.Item>
              <List.Item>
                <Link href="/templates">
                  <Anchor>
                    {pathname === '/templates' ? (
                      <strong>{t('common:templates')}</strong>
                    ) : (
                      t('common:templates')
                    )}
                  </Anchor>
                </Link>
              </List.Item>
              <List.Item>
                <Link href="/support">
                  <Anchor>
                    {pathname === '/support' ? (
                      <strong>{t('common:support')}</strong>
                    ) : (
                      t('common:support')
                    )}
                  </Anchor>
                </Link>
              </List.Item>
            </List>
          </List.Content>
        </List.Item>
        {renderMenuItemsByType()}
      </List>
    </Sidebar>
  );
};

export default VerticalSidebar;
