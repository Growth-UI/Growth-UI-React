import reduce from 'lodash/reduce';
import isArray from 'lodash/isArray';

const getMenuOptions = (menu: any): Record<string, any>[] => {
  const options = menu.props.children;

  if (!isArray(options)) {
    return [{ ...options.props, name: options?.type?.name }];
  }

  const filteredOptions = reduce(
    options,
    (acc, option: any) => [
      ...acc,
      {
        ...option.props,
        name: option?.type?.name,
      },
    ],
    [] as Record<string, any>[],
  );

  return filteredOptions;
};

export default getMenuOptions;
