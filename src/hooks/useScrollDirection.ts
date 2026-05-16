import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';

const SCROLL_THRESHOLD = 10;

export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < SCROLL_THRESHOLD);

      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_THRESHOLD) {
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeaderVisible = direction === 'up' || isAtTop;

  return { isHeaderVisible, direction };
}
