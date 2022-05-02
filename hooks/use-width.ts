import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => setWidth(window.innerWidth);
  
  useEffect(() => {
    handleResize();
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};