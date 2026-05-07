"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
}

export function Counter({ value }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract number and suffix (e.g., "$2.48B" -> 2.48 and "$", "B")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9.]*/)?.[0] || '';
  const suffix = value.match(/[A-Z+]+$/)?.[0] || '';

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayValue(start + easeProgress * (end - start));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {prefix}
      {numericValue % 1 === 0 
        ? Math.floor(displayValue).toLocaleString() 
        : displayValue.toFixed(2)}
      {suffix}
    </span>
  );
}
