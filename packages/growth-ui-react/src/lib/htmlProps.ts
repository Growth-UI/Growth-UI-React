import forEach from 'lodash/forEach';
import includes from 'lodash/includes';

export const htmlInputAttrs = [
  // REACT
  'selected',
  'defaultValue',
  'defaultChecked',

  // LIMITED HTML PROPS
  'accept',
  'autoCapitalize',
  'autoComplete',
  'autoCorrect',
  'autoFocus',
  'checked',
  'disabled',
  'form',
  'id',
  'inputMode',
  'lang',
  'list',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'step',
  'title',
  'type',
  'value',
];

export const htmlInputEvents = [
  // EVENTS
  // keyboard
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',

  // focus
  'onFocus',
  'onBlur',

  // form
  'onChange',
  'onInput',

  // mouse
  'onClick',
  'onContextMenu',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',

  // selection
  'onSelect',

  // touch
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
];

export const htmlInputProps = [...htmlInputAttrs, ...htmlInputEvents];

export const htmlImageProps = ['alt', 'height', 'src', 'srcSet', 'width', 'loading'];

export type Options = Partial<{
  htmlProps?: string[];
}>;

export function partitionHTMLProps(props: any, options: Options = {}): Record<string, any>[] {
  const { htmlProps = htmlInputProps } = options;
  const inputProps: Record<string, any> = {};
  const rest: Record<string, any> = {};

  forEach(props, (val, prop) => {
    if (includes(htmlProps, prop)) {
      inputProps[prop] = val;
    } else {
      rest[prop] = val;
    }
  });

  return [inputProps, rest];
}
