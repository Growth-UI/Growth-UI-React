import { useEffect, useState } from 'react';

const useMatchMedia = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  const handleChange = (e: MediaQueryListEvent) => {
    setMode(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setMode('dark');
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleChange);

    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleChange);
  }, []);

  return mode;
};

export default useMatchMedia;
