import ComponentControls from '../ComponentControls';
import ComponentDemo from './ComponentDemo';
import ComponentDocContext from '../ComponentDocContext';
import ComponentExampleTitle from './ComponentExampleTitle';
import ExampleEditor from '../ExampleEditor';
import getExampleSource from 'docs/utils/getExampleSource';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

type Props = {
  description?: string;
  examplePath: string;
  id: string;
  title?: string;
  controls?: boolean;
};

const ComponentExample = (props: Props) => {
  const { controls = true, examplePath } = props;
  const [showCode, setShowCode] = useState(false);
  const sourceCode = getExampleSource(examplePath);

  const handleShowCodeClick = () => setShowCode(!showCode);

  return (
    <Wrapper>
      <ComponentDocContext.Provider value={{ ...props, sourceCode, showCode }}>
        <ComponentExampleTitle />
        <Spacer size={50} />
        <ComponentDemo examplePath={examplePath} />
        <Spacer size={20} />
        {controls && (
          <ComponentControls
            onShowCode={handleShowCodeClick}
            showCode={showCode}
          />
        )}
        <Spacer size={20} />
        {showCode && <ExampleEditor />}
      </ComponentDocContext.Provider>
    </Wrapper>
  );
};

export default ComponentExample;
