import Chip, { ChipProps } from '../../elements/Chip';
import EventListener from '../../addons/EventListener';
import Icon from '../../elements/Icon';
import Paragraph from '../../elements/Paragraph';
import SelectItem, { SelectItemProps } from './SelectItem';
import SelectMenu, { SelectMenuProps } from './SelectMenu';
import stringSimilarity from 'string-similarity';
import styled from 'styled-components';
import { createChildren, createShorthandFactory, useClickOutside } from '../../lib';
import {
  difference,
  dropRight,
  every,
  filter,
  find,
  includes,
  invoke,
  isEmpty,
  isNil,
  map,
  union,
  without,
} from 'lodash';
import React, {
  ChangeEvent,
  Children,
  CSSProperties,
  FC,
  FocusEvent,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

export const StyledSelect = styled.div<SelectProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  min-width: 14em;
  border: 1px solid var(--border);
  border-radius: 0.28571429rem;
  padding: 0.58571429em 1em;
  background: var(--bg);
  outline: none;

  ${({ basic }) =>
    basic &&
    `
    border: none;
    border-bottom: 1px solid var(--border);
  `}

  ${({ circular }) =>
    circular &&
    `
    border-radius: 500rem;
  `}

  ${({ open }) =>
    open &&
    `
    border-color: #96c8da;
  `}

  ${({ error }) =>
    error &&
    `
    border-color: var(--color-error) !important;
  `}

  ${({ circular, open }) =>
    circular &&
    open &&
    `
    border-top-left-radius: 1.5rem !important;
    border-top-right-radius: 1.5rem !important;
    border-bottom-left-radius: 0rem !important;
    border-bottom-right-radius: 0rem !important;
  `}

  ${({ fluid }) => fluid && 'width: 100%;'};

  input {
    outline: none;
    padding-left: 7px;
    border: none;
    background: inherit;
    color: var(--text);
  }

  label {
    position: absolute;
    color: var(--text);
    opacity: 0.5;
    pointer-events: none;
    transition: all 300ms ease-in-out;
    padding: 0 0.2em;
    bottom: 50%;
    transform: translate(0, 50%);

    ${({ error }) =>
      error &&
      `
      color: var(--color-error) !important;
    `}

    ${({ open, searchQuery }) =>
      (open || searchQuery) &&
      `
      transform: scale(0.77) translate(-20%, 10px);
      bottom: 100%;
      color: rgb(144, 202, 249);
      background: inherit;
      opacity: 1;
    `}

    ${({ activeValues }) =>
      (Array.isArray(activeValues) ? !isEmpty(activeValues) : !isNil(activeValues)) &&
      `
      transform: scale(0.77) translate(-20%, 10px);
      bottom: 100%;
      background: inherit;
      opacity: 1;
    `}
  }
`;

export const Feedback = styled.span`
  padding-left: 5px;
  color: var(--color-error);
  font-size: var(--text-sm);
`;

type State = {
  open: boolean;
  searchQuery: string;
  selectedIndex: number;
  activeValues?: string | number | string[] | number[];
  focus: boolean;
};

const Select: FC<SelectProps> & SelectComponents = (props) => {
  const {
    children,
    clearable = false,
    closeOnChange = true,
    disabled,
    feedback,
    label,
    minCharacters = 1,
    multiple,
    open = false,
    options,
    placeholder,
    search,
    value,
    ...rest
  } = props;
  const [state, setState] = useState<State>({
    open,
    searchQuery: '',
    selectedIndex: -1,
    activeValues: value,
    focus: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useClickOutside(ref, () => setState({ ...state, open: false }), [state]);

  useEffect(() => {
    setState({
      ...state,
      activeValues: value,
    });
  }, [value]);

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  const closeOnEscape = (e: KeyboardEvent) => {
    if (e.key !== 'Escape' || e.code !== 'Escape') {
      return;
    }

    e.preventDefault();

    onClose(e as any);
  };

  const handleChange = (e: SyntheticEvent<HTMLElement>, newValues: State['activeValues']) => {
    setPlaceholder();

    invoke(props, 'onChange', e, { ...props, newValues });
  };

  const removeItemOnBackspace = (e: any) => {
    if (e.keyCode !== 8 || e.code !== 'Backspace' || e.key !== 'Backspace') {
      return;
    }

    if (state.searchQuery || !search || !multiple || isEmpty(state.activeValues)) {
      return;
    }

    e.preventDefault();

    const newActiveValues = dropRight(state.activeValues as any) as string[] | number[];

    setState({
      ...state,
      activeValues: newActiveValues,
    });

    handleChange(e as any, newActiveValues);
  };

  const selectItemOnEnter = (e: KeyboardEvent) => {
    const { open, selectedIndex } = state;

    if (!open || e.key !== 'Enter' || e.code !== 'Enter') {
      return;
    }

    e.preventDefault();

    const item = getSelectedItem(selectedIndex);

    makeSelectedItemActive(e, item);
  };

  const moveSelectionOnKeyDown = (e: KeyboardEvent) => {
    const { open } = state;

    if (!open) {
      return;
    }

    const moves: Record<string, any> = {
      ArrowDown: 1,
      ArrowUp: -1,
    };
    const move = moves[e.key || e.code];

    if (!move) {
      return;
    }

    e.preventDefault();

    const nextIndex = getSelectedIndexAfterMove(move);

    setState({
      ...state,
      selectedIndex: nextIndex,
    });
  };

  // ----------------------------------------
  // Behavior
  // ----------------------------------------
  const onOpen = (e?: MouseEvent) => {
    if (disabled) {
      return;
    }

    if (state.open && !search) {
      return onClose();
    }

    invoke(props, 'onOpen', e, { ...props, open: true });

    setState({
      ...state,
      open: true,
    });
  };

  const onClose = (e?: MouseEvent) => {
    invoke(props, 'onClose', e, { ...props, open: false });

    setState({
      ...state,
      open: false,
    });
  };

  // ----------------------------------------
  // Helpers
  // ----------------------------------------
  const hasChanged = (newActiveValues: any) => {
    const { activeValues } = state;

    return multiple
      ? difference(newActiveValues, (activeValues as any) || []).length
      : newActiveValues !== state.activeValues;
  };

  const hasValue = () => {
    return !isNil(state.activeValues);
  };

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------
  const handleKeyDown = (e: KeyboardEvent) => {
    moveSelectionOnKeyDown(e);
    selectItemOnEnter(e);
    closeOnEscape(e);

    invoke(props, 'onKeyDown', e, props);
  };

  const handleIconClick = (e: any) => {
    e.stopPropagation();

    if (clearable && hasValue()) {
      const newValues = multiple ? [] : undefined;

      setState({
        ...state,
        activeValues: newValues,
      });

      handleChange(e, newValues);
    }
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    onOpen(e);
  };

  const handleFocus = (e: FocusEvent<HTMLElement>) => {
    if (state.focus) {
      return;
    }

    invoke(props, 'onFocus', e, props);

    setState({
      ...state,
      focus: true,
    });
  };

  const handleBlur = (e: FocusEvent<HTMLElement>) => {
    if (!state.focus) {
      return;
    }

    invoke(props, 'onBlur', e, props);

    setState({
      ...state,
      focus: false,
    });
  };

  const handleItemClick = (e: MouseEvent<HTMLElement>, item: SelectItemProps) => {
    e.stopPropagation();

    if (item.disabled || multiple) {
      e.nativeEvent.stopImmediatePropagation();
    }

    makeSelectedItemActive(e, item);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    setPlaceholder();

    const { value } = e.target;
    const { activeValues } = state;

    setState({ ...state, searchQuery: value, activeValues: multiple ? activeValues : undefined });

    if (!state.open && value.length >= minCharacters) {
      onOpen();
    }
  };

  // ----------------------------------------
  // Getters
  // ----------------------------------------
  const getSelectedItem = (selectedItem: number) => {
    const filteredOptions = getFilteredOptions();

    if (isEmpty(filteredOptions)) {
      return;
    }

    return filteredOptions[selectedItem];
  };

  const getFilteredOptions = () => {
    const { activeValues, searchQuery } = state;

    if (isNil(options) || isEmpty(options)) {
      return [];
    }

    let filteredOptions = options;

    if (multiple) {
      filteredOptions = filter(options, (opt) => {
        const { value } = opt;

        return multiple ? !includes(activeValues as any, value) : activeValues !== value;
      });
    }

    if (search && searchQuery) {
      filteredOptions = filter(options, (opt) => {
        if (typeof search === 'function') {
          return search(searchQuery, opt);
        }

        const string = `${opt.text}` || `${opt.value}` || '';

        const similarity = stringSimilarity.compareTwoStrings(string, searchQuery);

        if (similarity > 0.1) return true;

        return false;
      });
    }

    return filteredOptions;
  };

  const getMenuProps = () => {
    const { basic, circular, error, scrolling } = props;
    const menuProps: Record<string, any> = {
      error,
      open: state.open,
      circular,
      basic,
    };

    menuProps.scrolling = scrolling;

    return menuProps;
  };

  const getItemByValue = (value: string | number) => {
    return find(options, { value });
  };

  // ----------------------------------------
  // Setters
  // ----------------------------------------
  const setPlaceholder = () => {
    const _searchRef = searchRef.current;

    if (_searchRef && placeholder && !multiple && _searchRef.placeholder !== placeholder) {
      _searchRef.placeholder = placeholder;
    }
  };

  const makeSelectedItemActive = (e: any, item?: SelectItemProps) => {
    const { activeValues, open } = state;

    if (!open || isNil(item) || item?.disabled) {
      return;
    }

    const newActiveValues: any = multiple ? union(activeValues as any, [item?.value]) : item?.value;

    if (search) {
      invoke(searchRef.current, 'focus');
    }

    if (hasChanged(newActiveValues)) {
      setState({
        ...state,
        activeValues: newActiveValues,
        searchQuery: '',
        open: closeOnChange ? !!multiple : false,
      });

      handleChange(e, newActiveValues);
    }
  };

  const handleChipRemove = (e: MouseEvent<HTMLElement>, chipProps: ChipProps) => {
    e.stopPropagation();

    const { activeValues } = state;

    const newActiveValues = without(activeValues as string | number[], chipProps.value);

    setState({
      ...state,
      activeValues: newActiveValues,
    });

    handleChange(e, newActiveValues);
  };

  const getSelectedIndexAfterMove = (offset: number, startIndex = state.selectedIndex): number => {
    const filteredOptions = getFilteredOptions();

    if (isEmpty(filteredOptions) || every(filteredOptions, 'disabled')) {
      return -1;
    }

    const lastIndex = filteredOptions.length - 1;

    let nextIndex = startIndex + offset;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    if (filteredOptions[nextIndex]?.disabled) {
      return getSelectedIndexAfterMove(offset, nextIndex);
    }

    return nextIndex;
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------
  const renderChips = () => {
    if (!multiple || isEmpty(state.activeValues)) {
      return null;
    }

    return (state.activeValues as any[]).map((value) => {
      const item = getItemByValue(value) || {};

      return (
        <div key={value} style={{ margin: '1px 5px 1px 0px' }}>
          <Chip {...item} onRemove={handleChipRemove} />
        </div>
      );
    });
  };

  const renderActiveItem = () => {
    if (multiple) {
      return null;
    }

    const { searchQuery } = state;
    const value = state.activeValues;
    const activeItem = getItemByValue(value as string | number);

    if (search && activeItem && !searchQuery && searchRef.current) {
      searchRef.current.placeholder = '';

      return (
        <Paragraph
          style={{
            position: 'absolute',
            zIndex: 10,
          }}
        >
          {activeItem?.text}
        </Paragraph>
      );
    }

    return activeItem?.content || <Paragraph>{activeItem?.text}</Paragraph> || null;
  };

  const renderOptions = () => {
    const { activeValues, selectedIndex } = state;
    const isActive = multiple
      ? (optKey: string | number) => includes(activeValues as any[], optKey)
      : (optKey: string | number) => activeValues === optKey;

    const filteredOptions = getFilteredOptions();

    return map(filteredOptions, (opt, index) =>
      SelectItem.create({
        ...opt,
        active: isActive(opt.value || index),
        selected: selectedIndex === index,
        onClick: handleItemClick,
        value: opt.value || index,
        style: { ...(opt.style || {}) },
      }),
    );
  };

  const renderMenu = () => {
    const menuProps = getMenuProps();

    if (children) {
      const menuChild = Children.only(children);

      return createChildren(menuChild, { defaultOptions: menuProps });
    }

    return <SelectMenu {...menuProps}>{renderOptions()}</SelectMenu>;
  };

  const renderIcon = () => {
    if (clearable && (Array.isArray(state.activeValues) ? !isEmpty(state.activeValues) : !isNil(state.activeValues))) {
      return <Icon name="close" width={17} style={{ marginLeft: 'auto' }} onClick={handleIconClick} />;
    }

    return <Icon flipped={state.open} name="triangle down" width={17} style={{ marginLeft: 'auto' }} />;
  };

  return (
    <>
      <StyledSelect
        {...rest}
        {...state}
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={ref}
      >
        {label && <label ref={labelRef}>{label}</label>}
        {renderChips()}
        {renderActiveItem()}
        {search && (
          <input ref={searchRef} value={state.searchQuery} onChange={handleSearchChange} placeholder={placeholder} />
        )}
        {renderIcon()}
        {renderMenu()}
        {state.focus && <EventListener name="keydown" listener={removeItemOnBackspace} />}
      </StyledSelect>
      {feedback && <Feedback>{feedback}</Feedback>}
    </>
  );
};

Select.create = createShorthandFactory(Select, (content) => ({ content }));
Select.Menu = SelectMenu;
Select.Item = SelectItem;

interface SelectComponents {
  create: ReturnType<typeof createShorthandFactory>;
  Menu: typeof SelectMenu;
  Item: typeof SelectItem;
}

// ======================================================
export interface SelectProps extends StrictSelectProps, SelectMenuProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSelectProps {
  /** Basic looking. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** A shape component can be circular shape. */
  circular?: boolean;

  /** Using the clearable setting will let users remove their selection. */
  clearable?: boolean;

  /** Close menu on change. */
  closeOnChange?: boolean;

  /** Initial value or value array if multiple. */
  // defaultValue?: SelectItemProps['value'] | SelectItemProps['value'][];

  /** A disabled select menu or item does not allow user interaction. */
  disabled?: boolean;

  /** A select field can show th  e data contains errors. */
  error?: boolean;

  /** Feedback to the user about the error. */
  feedback?: string;

  /** A select can take the full width of its parent */
  fluid?: boolean;

  /** The label of the select used for layout. */
  label?: string;

  /** The minimum characters for a search to begin showing results. */
  minCharacters?: number;

  /** A select can allow multiple selections. */
  multiple?: boolean;

  /** Controls whether or not the select menu is displayed. */
  open?: boolean;

  /** Called on blur. */
  onBlur?: (event: FocusEvent<HTMLElement>, data: SelectProps) => void;

  /** Called when the user attempts to change the value. */
  onChange?: (event: SyntheticEvent<HTMLElement>, data: SelectProps) => void;

  /** Called when a close event happens. */
  onClose?: (event: SyntheticEvent<HTMLElement>, data: SelectProps) => void;

  /** Called when a click event happens. */
  onClick?: (event: MouseEvent<HTMLElement>, data: SelectProps) => void;

  /** Called on focus. */
  onFocus?: (event: FocusEvent<HTMLElement>, data: SelectProps) => void;

  /** Called when an open event happens. */
  onOpen?: (event: MouseEvent<HTMLElement>, data: SelectProps) => void;

  /** Items for Select component. */
  options?: SelectItemProps[];

  /** Placeholder text. */
  placeholder?: string;

  /** A selection dropdown can allow a user to search through a large list of choices.
  Pass a function here to replace the default search. */
  search?: boolean | ((searchQuery: string, item: SelectItemProps) => boolean);

  /** Custom styles. */
  style?: CSSProperties;

  /** Current value or value array if multiple. Creates a controlled component. */
  value?: string | number | string[] | number[] | undefined;
}

export default Select;
