import isSSR from '../utils/isSSR';
import { useEffect, useState } from 'react';

const useWindowResize = () => {
  const [width, setWidth] = useState<number>(
    isSSR() ? 1600 : window.innerWidth,
  );
  const [height, setHeight] = useState<number>(
    isSSR() ? 1000 : window.innerHeight,
  );

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
};

export default useWindowResize;
