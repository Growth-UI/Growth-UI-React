import React, { ReactElement, ReactNode } from 'react';
import theme from './theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useColorSchemePreference } from './lib';

const light = `
  --bg: #fff;
  --inverted-bg: rgb(21, 21, 21);
  --bg-hover: rgba(0,0,0,0.03);
  --text: rgba(0,0,0,0.8);
  --inverted-text: rgb(230, 230, 230);
  --light-text: rgba(0,0,0,0.6);
  --icon-color: rgba(0, 0, 0, 0.54);
  --border: rgba(34, 36, 38, 0.1);
  --inverted-border: #adaaaa;
  --dimmed: rgba(0,0,0,0.45);
  --shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  --emphasis-secondary: #f5f5f5;
  --icon-button-bg: rgba(0, 0, 0, 0.04);
  --chip-bg: rgba(0,0,0,0.08);
  --active-bg: rgba(0, 0, 0, 0.08);
  --filled: rgba(0, 0, 0, 0.09);
`;

const dark = `
  --active-bg: rgba(255, 255, 255, 0.16);
  --chip-bg: rgba(255,255,255,0.06);
  --text: rgb(230, 230, 230);
  --inverted-text: rgba(0,0,0,0.8);
  --light-text: rgba(255,255,255,0.6);
  --bg: rgb(21, 21, 21);
  --inverted-bg: #fff;
  --bg-hover: rgba(255, 255, 255, 0.05);
  --icon-color: #fff;
  --border: rgba(255, 255, 255, 0.23);
  --inverted-border: rgba(34, 36, 38, 0.1);
  --dimmed: rgba(255, 255, 255, 0.05);
  --shadow: 0 1px 2px 0 rgb(255 255 255 / 15%);
  --emphasis-secondary: #000;
  --icon-button-bg: rgba(255, 255, 255, 0.08);
  --filled: rgba(255, 255, 255, 0.09);
`;

const colorScheme = {
  dark,
  light,
};

const GlobalStyle = createGlobalStyle<GrowthStyleProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  ul,
  li {
    list-style: none;
  }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    margin: 0;
    padding: 0;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  svg {
    transition: transform 200ms ease-out;
  }
  ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 400ms linear;
    background: rgba(255, 255, 255, 0.6);
  }
  @keyframes ripple {
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
  :root {
    --color-primary: rgb(59, 130, 246);
    --color-secondary: rgb(75, 85, 99);
    --color-error: #9f3a38;
    --color-warning: rgb(75, 85, 99);
    --color-info: rgb(75, 85, 99);
    --color-positive: rgb(75, 85, 99);
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-50: rgb(249, 250, 251);
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;
    --color-red-50: rgb(254, 242, 242);
    --color-red-100: #fee2e2;
    --color-red-200: #fecaca;
    --color-red-300: #fca5a5;
    --color-red-400: #f87171;
    --color-red-500: #ef4444;
    --color-red-600: #ec0101;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
    --color-red-900: #7f1d1d;
    --color-blue-50: rgb(239, 246, 255);
    --color-blue-100: #dbeafe;
    --color-blue-200: #bfdbfe;
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-blue-700: #1d4ed8;
    --color-blue-800: #1e40af;
    --color-blue-900: #1e3a8a;
    --color-green-50: #ecfdf5;
    --color-green-100: #d1fae5;
    --color-green-200: #a7f3d0;
    --color-green-300: #6ee7b7;
    --color-green-400: #34d399;
    --color-green-500: #10b981;
    --color-green-600: #059669;
    --color-green-700: #047857;
    --color-green-800: #065f46;
    --color-green-900: #064e3b;
    --color-pink-50: #fdf2f8;
    --color-pink-100: #fce7f3;
    --color-pink-200: #fbcfe8;
    --color-pink-300: #f9a8d4;
    --color-pink-400: #f472b6;
    --color-pink-500: #ec4899;
    --color-pink-600: #db2777;
    --color-pink-700: #be185d;
    --color-pink-800: #9d174d;
    --color-pink-900: #831843;
    --color-yellow-50: #FFFBEB;
    --color-yellow-100: #FEF3C7;
    --color-yellow-200: #FDE68A;
    --color-yellow-300: #FCD34D;
    --color-yellow-400: #FBBF24;
    --color-yellow-500: #F59E0B;
    --color-yellow-600: #D97706;
    --color-yellow-700: #B45309;
    --color-yellow-800: #92400E;
    --color-yellow-900: #78350F;
    --color-purple-50: #F5F3FF;
    --color-purple-100: #EDE9FE;
    --color-purple-200: #DDD6FE;
    --color-purple-300: #C4B5FD;
    --color-purple-400: #A78BFA;
    --color-purple-500: #8B5CF6;
    --color-purple-600: #7C3AED;
    --color-purple-700: #6D28D9;
    --color-purple-800: #5B21B6;
    --color-purple-900: #4C1D95;
    --color-indigo-50: #EEF2FF;
    --color-indigo-100: #E0E7FF;
    --color-indigo-200: #C7D2FE;
    --color-indigo-300: #A5B4FC;
    --color-indigo-400: #818CF8;
    --color-indigo-500: #6366F1;
    --color-indigo-600: #4F46E5;
    --color-indigo-700: #4338CA;
    --color-indigo-800: #3730A3;
    --color-indigo-900: #831843;
    --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    --text-2xs: 10px;
    --text-xs: 12px;
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    --text-6xl: 3.75rem;
    --text-7xl: 4.5rem;
    --text-8xl: 6rem;
    --text-9xl: 9rem;
    --leading-3: 0.75rem;
    --leading-4: 1rem;
    --leading-5: 1.25rem;
    --leading-6: 1.5rem;
    --leading-7: 1.75rem;
    --leading-8: 2rem;
    --leading-9: 2.25rem;
    --leading-10: 2.5rem;
    --leading-none: 1;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    ${light}

    ${({ autoDarkMode, darkMode, scheme }) => {
      if (autoDarkMode) {
        return colorScheme[scheme as 'dark' | 'light'];
      }

      if (darkMode) {
        return dark;
      }
    }}
  }

  ${({ globalStyle }) => globalStyle}
`;

const GrowthStyle = (props: GrowthStyleProps): ReactElement => {
  const { autoDarkMode = false, children, darkMode, theme: _theme = {}, ...rest } = props;

  const scheme = useColorSchemePreference();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ..._theme,
      }}
    >
      <GlobalStyle {...rest} autoDarkMode={autoDarkMode} darkMode={darkMode} scheme={scheme} />
      {children}
    </ThemeProvider>
  );
};

export interface GrowthStyleProps extends StrictGrowthStyleProps {
  [k: string]: any;
}

interface StrictGrowthStyleProps {
  autoDarkMode?: boolean;
  children?: ReactNode;
  darkMode?: boolean;
  globalStyle?: string;
  theme?: Record<string, any>;
}

export default GrowthStyle;
