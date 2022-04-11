import isNil from 'lodash/isNil';
import isPlainObject from 'lodash/isPlainObject';
import { Children, cloneElement, createElement, isValidElement, ReactChildren, ReactNode } from 'react';
import { cx } from './classNameBuilders';

// ============================================================
// Factories
// ============================================================

/**
 * It creates new children with extra props.
 *
 * @param {ReactChildren} children A React children
 * @param {object} options Props to pass
 */
export const createChildren = (children: ReactNode | readonly ReactNode[], options: Record<string, any> = {}) =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      const { overrideProps = {}, ...defaultProps } = options;

      const props = {
        ...defaultProps,
        ...child.props,
        ...overrideProps,
      };

      return cloneElement(child, props);
    }

    return child;
  });

/**
 * @deprecated Do not use this function.
 */
export const createShorthand = (
  Component: keyof JSX.IntrinsicElements,
  val: string | boolean | number | JSX.Element | undefined | null,
  defaultProps: Record<string, any> = {},
) => {
  if (isNil(val) || isNil(Component)) {
    return null;
  }

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  const props = { ...defaultProps, children: val };

  // ----------------------------------------
  // Create Element
  // ----------------------------------------
  if (isValidElement(Component)) {
    return cloneElement(Component, props);
  }

  return createElement(Component, props);
};

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {object} defaultProps Default props object
 */
export const buildShorthand = (
  Component: any,
  mapValueToProps: (val: any) => Record<string, any>,
  val: any,
  options: Record<string, any> = {},
) => {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('buildShorthand() Component must be a string or function.');
  }

  if (isNil(val)) {
    return null;
  }

  const valIsReactElement = isValidElement(val);
  const valIsObject = isPlainObject(val);
  const valIsPrimitiveValue =
    typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);

  // Build props
  const userProps =
    (valIsReactElement && val.props) || (valIsObject && val) || (valIsPrimitiveValue && mapValueToProps(val));

  // Override props
  const { overrideProps = {}, ...defaultProps } = options;

  const props = {
    ...defaultProps,
    ...userProps,
    ...overrideProps,
  };

  // Merge className
  if (defaultProps.className || overrideProps.className || userProps.className) {
    const mergedClassesNames = cx(defaultProps.className, overrideProps.className, userProps.className);

    props.className = mergedClassesNames;
  }

  // Merge style
  if (defaultProps.style || overrideProps.style || userProps.style) {
    props.style = { ...defaultProps.style, ...userProps.style, ...overrideProps.style };
  }

  if (defaultProps.css || overrideProps.css || userProps.css) {
    props.css = (defaultProps.css || '') + (userProps.css || '') + (overrideProps.css || '');
  }

  // ----------------------------------------
  // Create Element
  // ----------------------------------------
  if (valIsReactElement) {
    return cloneElement(val, props);
  }

  if (typeof props.children === 'function') {
    return props.children(Component, { ...props, children: undefined });
  }

  if (valIsObject) {
    return createElement(Component, props);
  }

  return createElement(Component, { ...props, children: val });
};

export const createShorthandFactory = (
  Component: any,
  mapValueToProps: (val: any) => Record<string, any> = () => ({}),
) => {
  return (val?: any, options?: Record<string, any>) => buildShorthand(Component, mapValueToProps, val, options);
};
