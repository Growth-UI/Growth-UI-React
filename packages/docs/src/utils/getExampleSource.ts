import exampleSources from 'docs/exampleSources.json';
import last from 'lodash/last';
import prettier from 'docs/utils/prettier';

const getExampleSource = (examplePath: string) => {
  const example: string = last(examplePath.split('/')) || '';
  const exampleSource = (exampleSources as Record<string, string>)[example];

  if (!exampleSource) return null;

  return prettier(exampleSource);
};

export default getExampleSource;
