import isNil from 'lodash/isNil';
import uniq from 'lodash/uniq';

/**
 * Returns the joined className.
 * @param {*} args Array of className.
 */
export const cx = (...args: any[]) =>
  uniq(args.filter((arg) => !isNil(arg)))
    .join(' ')
    .trim();

/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */
export const useKeyOnly = (val: any, key: string) => {
  if (val) return key;

  return undefined;
};

/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */
export const useValueAndKey = (val: any, key: string) => {
  if (val && val !== true) {
    return `${val} ${key}`;
  }

  return undefined;
};

/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */
export const useKeyOrValueAndKey = (val: any, key: string) => {
  // val && (val === true ? key : `${val} ${key}`);
  if (val) {
    if (val === true) return key;
    return `${val} ${key}`;
  }

  return undefined;
};
