"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface CompanyDetails {
  name: string;
  ImageURL: string;
}

const CompanyDetails: CompanyDetails[] = [
  { name: "Dahua Technology Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png" },
  { name: "Hikvision Nepal", ImageURL: "https://i0.wp.com/tatningard.mx/wp-content/uploads/2021/03/41f16-hikvision-logo.png?ssl=1" },
  { name: "Ruijie Technology", ImageURL: "https://i0.wp.com/castroconcepts.com/wp-content/uploads/2024/08/Ruijie-Logo-Singapore.png?ssl=1" },
  { name: "TP-Link Nepal", ImageURL: "https://www.cdnlogo.com/logos/t/34/tp-link.svg" },
  { name: "Acer Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png" },
  { name: "Asus Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" },
  { name: "Lenovo Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png" },
  { name: "Dell Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
  { name: "Epson Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Epson_logo.svg/2560px-Epson_logo.svg.png" },
  { name: "Benq Nepal", ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BenQ-Logo.svg/2560px-BenQ-Logo.svg.png" }
];

const DealersLogo = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5; // Reduced but smooth

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft = (scrollContainer.scrollLeft + scrollSpeed) % (scrollContainer.scrollWidth / 2);


        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedCompanies = [...CompanyDetails, ...CompanyDetails];

  return (
    <div 
      className="w-full py-5 md:py-9 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchMove={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div 
          ref={scrollRef}
          className="overflow-x-scroll whitespace-nowrap scrollbar-hide flex"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div 
              key={index}
              className="inline-block mx-6 relative"
            >
             <div className="w-16 h-6 flex items-center justify-center">
  <img 
    src={company.ImageURL || "/api/placeholder/120/120"}
    alt={company.name}
    className="max-w-full max-h-full object-contain"
  />
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealersLogo;
