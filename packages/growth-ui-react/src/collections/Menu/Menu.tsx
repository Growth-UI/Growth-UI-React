import MenuHeading, { StyledMenuHeading } from './MenuHeading';
import MenuItem, { StyledMenuItem } from './MenuItem';
import MenuMenu, { StyledMenuMenu } from './MenuMenu';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledMenu = styled.div<MenuProps>`
  position: relative;
  display: flex;
  font-weight: 400;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 0.28571429rem;
  min-height: 2.85714286em;
  border-radius: 0.28571429rem;
  width: ${({ compact }) => (compact ? 'fit-content' : '100%')};
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};

  & ${StyledMenuItem}.active {
    background: var(--emphasis-secondary);
    font-weight: 600;
  }

  /* Vertical */
  ${({ vertical }) =>
    vertical &&
    `
    width: 15rem;

    & > ${StyledMenuItem}:first-child:before {
      display: none;
    }

    & > ${StyledMenuItem}:not(:first-child):before {
      width: 100%;
      height: 1px;
    }

    & ${StyledMenuItem} > ${StyledMenuHeading} {
      margin: 0 0 0.5em;
    }

    & ${StyledMenuItem} > ${StyledMenuMenu} {
      margin: 0em -1.14285714em -0.92857143em;  
      background: var(--bg);
    }

    & ${StyledMenuMenu} > ${StyledMenuItem} {
      padding: 0.5em 1.14285714em;
    }

    & ${StyledMenuMenu} > ${StyledMenuItem}:hover {
      font-weight: 600;
    }

    & ${StyledMenuMenu} > ${StyledMenuItem}:before {
      display: none;
    }

    & ${StyledMenuMenu} > ${StyledMenuItem}.active {
      background: transparent;
    }
  `}

  /* Secondary */
  ${({ secondary, vertical }) => {
    if (!secondary) return;

    const css = `
      border: none;
      box-shadow: none;
      border-radius: 0;

      & > ${StyledMenuItem}:before {
        display: none;
      }
    `;

    if (vertical) {
      return css.concat(`
        border-right: 2px solid var(--border);

        & > ${StyledMenuItem} {
          margin-right: -2px;
        }

        & > ${StyledMenuItem}.active {
          border-right: 2px solid var(--inverted-bg);
          background: transparent;
        }

        & > ${StyledMenuItem}:hover {
          background: transparent;
          border-right: 2px solid var(--inverted-bg);
        }
      `);
    }

    return css.concat(`
      border-bottom: 2px solid var(--border);

      & > ${StyledMenuItem} {
        margin: 0 0 -2px;
      }

      & > ${StyledMenuItem}.active {
        border-bottom: 2px solid var(--inverted-bg);
        background: transparent;
      }

      & > ${StyledMenuItem}:hover {
        background: transparent;
        border-bottom: 2px solid var(--inverted-bg);
      }
    `);
  }}

  /* Basic */
  ${({ basic }) =>
    basic &&
    `
    border: none;
    box-shadow: none;

    & > ${StyledMenuItem} {
      border-radius: 5px;
    }

    & > ${StyledMenuItem}.active {
      background: var(--emphasis-secondary);
    }

    & > ${StyledMenuItem}:before {
      display: none;
    }
  `}

  /* Pointing */
  ${({ basic, pointing, vertical }) => {
    if (!pointing) return;

    const css = `
      & > ${StyledMenuItem}.active:after {
        position: absolute;
        content: '';
        width: .57142857em;
        height: .57142857em;
        border: none;
        background: var(--emphasis-secondary);
        z-index: 2;
      }
    `;

    if (basic && vertical) {
      return css.concat(`
        & > ${StyledMenuItem}.active:after {
          top: 50%;
          right: 0;
          bottom: auto;
          left: auto;
          margin: 0 -.5px 0 0;
          transform: translateX(50%) translateY(-50%) rotate(45deg);
        }
      `);
    }

    if (vertical) {
      return css.concat(`
        margin: 0;

        & > ${StyledMenuItem}.active:after {
          top: 50%;
          right: 0;
          bottom: auto;
          left: auto;
          margin: 0 -.5px 0 0;
          border-top: 1px solid var(--border);
          border-right: 1px solid var(--border);    
          transform: translateX(50%) translateY(-50%) rotate(45deg);
        }
      `);
    }

    if (basic) {
      return css.concat(`
        & > ${StyledMenuItem}.active:after {
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
      `);
    }

    return css.concat(`
      & > ${StyledMenuItem}.active:after {
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        border-bottom: 1px solid var(--border);
        border-right: 1px solid var(--border);
      }
    `);
  }}

  /* Tabular */
  ${({ tabular, vertical }) => {
    if (!tabular) return;

    const css = `
      border: none;
      box-shadow: none;
      border-radius: 0;
      
      & > ${StyledMenuItem} {
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-top: 1px solid transparent;
      }

      & > ${StyledMenuItem}:before {
        display: none;
      }

      & > ${StyledMenuItem}.active {
        background: var(--bg);
        border-color: var(--border);
      }
    `;

    if (vertical && tabular === 'right') {
      return css.concat(`
        border-left: 1px solid var(--border);

        & > ${StyledMenuItem}.active {
          background: var(--bg);
          border-color: var(--border);
          margin-left: -1px;
          border-left: 1px;
          border-bottom: 1px solid var(--border);
          border-radius: 0 .28571429rem .28571429rem 0 !important;
        }
      `);
    }

    if (vertical && tabular) {
      return css.concat(`
        border-right: 1px solid var(--border);

        & > ${StyledMenuItem}.active {
          background: var(--bg);
          border-color: var(--border);
          margin-right: -1px;
          border-right: 1px;
          border-bottom: 1px solid var(--border);
          border-radius: .28571429rem 0 0 .28571429rem !important;
        }
      `);
    }

    return css.concat(`
      border-bottom: 1px solid var(--border);

      & > ${StyledMenuItem}.active {
        margin-bottom: -1px;
        border-radius: .28571429rem .28571429rem 0 0 !important;
      }
    `);
  }}
`;

const Menu: FC<MenuProps> & MenuComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledMenu {...rest}>{children}</StyledMenu>;
};

Menu.Heading = MenuHeading;
Menu.Item = MenuItem;
Menu.Menu = MenuMenu;

// ======================================================
interface MenuComponents {
  Heading: typeof MenuHeading;
  Item: typeof MenuItem;
  Menu: typeof MenuMenu;
}

// ======================================================
export interface MenuProps extends StrictMenuProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMenuProps {
  /** A menu can adjust its appearance to de-emphasize its contents. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** A menu can take up only the space necessary to fit its content. */
  compact?: boolean;

  /** A menu can point to show its relationship to nearby content. */
  pointing?: boolean;

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A menu can be formatted to show tabs of information. */
  tabular?: boolean | 'right';

  /** A vertical menu item can include any type of text content. */
  text?: boolean;

  /** A vertical menu displays elements vertically. */
  vertical?: boolean;
}

export default Menu;
