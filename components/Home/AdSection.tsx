"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AdSlide {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  backgroundImage: string;
  characterImage?: string;
}

const slides: AdSlide[] = [
  {
    id: 1,
    title: "ACER PREDATOR",
    subtitle: "HELIOS NEO 16",
    year: "2024",
    backgroundImage: "/ad.png",
    characterImage: "/images/character1.png",
  },
  {
    id: 2,
    title: "ACER PREDATOR",
    subtitle: "HELIOS NEO 16",
    year: "2024",
    backgroundImage: "/ad2.png",
    characterImage: "/images/character1.png",
  },

];

export default function AdSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = slides.length;

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    startSlideTimer();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    startSlideTimer();
  };

  return (
    <div className="w-full landing_container">
      <Card className="relative overflow-hidden rounded-lg  md:h-64 border-none shadow-none">
        {/* Slider content */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center"
            >
             <Image src={slide.backgroundImage} height={10000} width={100000} alt={slide.title} className="h-full w-auto md:w-full  md:rounded-4xl object-contain" ></Image> 
            </div>
          ))}
        </div>

        <Button 
          variant="secondary"
          size="icon" 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/70 rounded-full p-2"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="secondary"
          size="icon" 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/70 rounded-full p-2"
          onClick={goToNextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}