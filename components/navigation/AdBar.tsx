import React from 'react';
import AdSlider from './AdSlider';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const adData = [
  { text: 'New Year Offer – 20% OFF', link: '/offers/new-year' },
  { text: 'Website Launch – 10% Discount', link: '/offers/launch' },
  { text: 'Mac M4 available – Buy Now', link: '/products/mac-m4' },
  { text: 'Follow us for updates!' }, // no link
];

const AdBar = () => {
  return (
    <div className="w-full bg-[var(--ad-bar-bg)] h-[32px] mb-3">
      <div className="landing_container flex items-center justify-around md:justify-between text-[var(--ad-bar-text)] text-sm font-medium h-full">
        
        {/* Left slogan */}
        <span className="hidden md:inline">Slogan Slogan Slogan</span>

        {/* Center Ad Slider - hidden on small screens */}
        <div className="hidden md:inline flex-1 px-4">
          <AdSlider ads={adData} />
        </div>

        {/* Right contact */}
        <div className="flex flex-row items-center gap-4 min-w-fit">
          {/* Phone */}
          <a href="tel:011660888" className="text-decoration-none">
            <div className="flex items-center gap-1 cursor-pointer font-normal">
              <Icon icon="fluent:call-20-filled" className="text-xl" />
              <span className="hover-underline">011-660888</span>
            </div>
          </a>

          {/* Location */}
          <Link href="https://maps.app.goo.gl/Yu61K5N2wgZovMzR8">
            <div className="flex items-center gap-1 cursor-pointer monsterrat font-normal">
              <Icon icon="weui:location-filled" className="text-xl" />
              <span className="hover-underline">Store Location</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdBar;
