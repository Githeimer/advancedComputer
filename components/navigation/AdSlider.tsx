'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type AdItem = {
  text: string;
  link?: string;
};

const AdSlider = ({ ads }: { ads: AdItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (ads.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ads.length);
        setFade(true); // fade in
      }, 300); // this matches the transition duration
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [ads]);

  const currentAd = ads[currentIndex];

  return (
    <div className="h-[32px] flex items-center overflow-hidden justify-center text-center">
      <div
        className={`transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentAd.link ? (
          <Link href={currentAd.link} target="_blank" rel="noopener noreferrer">
            <span className="hover:underline cursor-pointer">{currentAd.text}</span>
          </Link>
        ) : (
          <span>{currentAd.text}</span>
        )}
      </div>
    </div>
  );
};

export default AdSlider;
