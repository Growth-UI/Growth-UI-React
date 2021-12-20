const typifyOptions = (options: Record<string, any>): Record<string, any> =>
  Object.keys(options).reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: +options[cur],
    }),
    {},
  );

export default typifyOptions;
