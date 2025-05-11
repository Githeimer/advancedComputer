"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from "@/types/product";
import ProductCardComponent from '@/components/shop/ProductCard';

export default function ResponsiveProductCarousel({ 
  products, 
  desktopProducts = 4, 
  tabletProducts = 3, 
  mobileProducts = 2,
}: { 
  products: ProductCard[],
  desktopProducts?: number,
  tabletProducts?: number,
  mobileProducts?: number,
 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(desktopProducts);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle screen resize to determine how many products to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerView(mobileProducts);
      } else if (window.innerWidth < 1024) {
        setProductsPerView(tabletProducts);
      } else {
        setProductsPerView(desktopProducts);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopProducts, tabletProducts, mobileProducts]);

  // Mouse/touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const distance = (x - startX);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const distance = (x - startX);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Navigation functions
  const scrollToNext = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#f9f9f9]">
      {/* Side navigation arrows */}
      <button
        onClick={scrollToPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80  p-0.5 md:p-1 rounded-sm shadow-md cursor-pointer"
        aria-label="Previous products"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      
      <button
        onClick={scrollToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 p-0.5 md:p-1 rounded-sm shadow-md cursor-pointer"
        aria-label="Next products"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
      
      {/* Product carousel container */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product, index) => (
          <div 
            key={index}
            className="snap-start shrink-0 px-2 pt-2 my-2 flex items-center justify-center"
            style={{ 
              width: `${100 / productsPerView}%`,
              scrollSnapAlign: 'start'
            }}
          >
            <ProductCardComponent productDetails={product}  />
          </div>
        ))}
      </div>
    </div>
  );
}