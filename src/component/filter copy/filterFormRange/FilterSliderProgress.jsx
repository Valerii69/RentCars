'use client';

import { useRef, useEffect } from 'react';

export function FilterSliderProgress({ minValue, maxValue, max, min}) {
  const progressRef = useRef(null);

  useEffect(() => {
    const totalRange = max - min;

    const leftPercentage = (((minValue - min) / totalRange) * 100);
    const rightPercentage = (((max - maxValue) / totalRange) * 100);

    if (minValue < max && minValue > min ) {
      progressRef.current.style.left = leftPercentage + '%';
    }
    if (maxValue <= max && maxValue >= min) {
      progressRef.current.style.right = rightPercentage + '%';
    }}, [minValue, maxValue, max, min]);

  return (
    <div className="relative left-[10px] h-1 w-[328px] bg-accent-200 tab:w-[670px] lap:w-[250px] ">
      <div
        className="progress absolute h-1 bg-accent-500"
        ref={progressRef}
      ></div>
    </div>
  );
}
