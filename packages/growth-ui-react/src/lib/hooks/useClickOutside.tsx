import { MutableRefObject, useEffect } from 'react';

const useClickOutside = (ref: MutableRefObject<any>, cb: () => void) => {
  const handleDocumentClick = (e: any) => {
    if (!ref.current?.contains(e.target)) cb();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);
};

export default useClickOutside;
