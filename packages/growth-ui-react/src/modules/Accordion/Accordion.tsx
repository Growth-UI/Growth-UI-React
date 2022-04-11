import AccordionContent from './AccordionContent';
import AccordionPanel, { AccordionPanelProps } from './AccordionPanel';
import AccordionTitle from './AccordionTitle';
import React, { Children, cloneElement, FC, isValidElement, MouseEvent, ReactNode, useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { includes, invoke, without } from 'lodash';

export const StyledAccordion = styled.div<AccordionProps>`
  position: relative;
  max-width: 100%;

  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};

  ${({ styled }) =>
    styled &&
    `
    border-radius: .28571429rem;
    border: 1px solid var(--border);
  `}
`;

const Accordion: FC<AccordionProps> & AccordionComponents = (props) => {
  const { children, defaultActiveIndex, exclusive = true, iconPosition, panels, ...rest } = props;
  const [activeIndex, setActiveIndex] = useState<number | number[]>();

  useEffect(() => {
    if (!exclusive) setActiveIndex(defaultActiveIndex || []);
  }, [exclusive]);

  const computeNewIndex = (index: number) => {
    if (exclusive) {
      return activeIndex !== index ? index : -1;
    }

    if (includes(activeIndex as number[], index)) {
      return without(activeIndex as number[], index);
    }

    return [...(activeIndex as number[]), index];
  };

  const isIndexActive = (index: number) => {
    if (Array.isArray(activeIndex)) {
      return includes(activeIndex, index);
    }

    return activeIndex === index;
  };

  const handlePanelClickOverride = (panelProps: AccordionPanelProps) => (e: MouseEvent) => {
    const newIndex = computeNewIndex(panelProps.index);

    invoke(panelProps, 'onClick', e, { ...panelProps, active: newIndex === panelProps.index });
    setActiveIndex(newIndex);
  };

  const renderPanels = () => {
    let overrideProps: AccordionPanelProps = {};

    if (children) {
      return Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        overrideProps = {
          ...rest,
          ...child.props,
          active: isIndexActive(index),
          iconPosition,
          index,
        };

        return cloneElement(child, {
          ...overrideProps,
          onClick: handlePanelClickOverride(overrideProps),
        });
      });
    }

    return panels?.map((panel, index) => {
      overrideProps = {
        ...rest,
        ...panel,
        active: isIndexActive(index),
        iconPosition,
        index,
      };

      return <AccordionPanel {...overrideProps} onClick={handlePanelClickOverride(overrideProps)} />;
    });
  };

  return <StyledAccordion {...rest}>{renderPanels()}</StyledAccordion>;
};

Accordion.Content = AccordionContent;
Accordion.Panel = AccordionPanel;
Accordion.Title = AccordionTitle;

interface AccordionComponents {
  Content: typeof AccordionContent;
  Panel: typeof AccordionPanel;
  Title: typeof AccordionTitle;
}

// ======================================================
export interface AccordionProps extends StrictAccordionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictAccordionProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number[];

  /** Only allow one panel open at a time. */
  exclusive?: boolean;

  /** Format to take up the width of its container. */
  fluid?: boolean;

  /** Icon can be positioned either left or right. */
  iconPosition?: 'left' | 'right';

  /** Shorthand array of props for Accordion. */
  panels?: AccordionPanelProps[];

  /** Custom style */
  style?: CSSProperties;
}

export default Accordion;
