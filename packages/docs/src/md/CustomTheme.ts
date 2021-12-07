const CustomTheme = `
~~~jsx
import { GrowthStyle } from '@growth-ui/react';

const customGlobalStyle = \`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  #__next {
    height: 100%;
  }
\`

const theme = {
  maxWidth: 1600px;
}

const App = () => (
  <>
    <GrowthStyle globalStyle={customGlobalStyle} theme={theme}>
      <Component />
    </GrowthStyle>
  </>
)
~~~
`;

export default CustomTheme;
