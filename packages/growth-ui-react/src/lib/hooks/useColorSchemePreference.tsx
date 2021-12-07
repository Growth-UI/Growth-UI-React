import { useEffect, useState } from 'react';

type ColorScheme = 'dark' | 'light';

const useColorSchemePreference = () => {
  const [scheme, setScheme] = useState<ColorScheme>('light');

  const handleListener = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setScheme('dark');
    } else {
      setScheme('light');
    }
  };

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    if (mql.matches) {
      setScheme('dark');
    }

    mql.addEventListener('change', handleListener);

    return () => mql.removeEventListener('change', handleListener);
  }, []);

  return scheme;
};

export default useColorSchemePreference;
