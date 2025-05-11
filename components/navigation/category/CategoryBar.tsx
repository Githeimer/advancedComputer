"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Laptop, Monitor, Cpu, Headphones, HardDrive} from "lucide-react"

// Categories data structure
const categories = [
  {
    title: "Laptops and Desktops",
    href: "/category/laptops",
    icon: <Laptop className="h-4 w-4 mr-2" />,
    description: "Find the perfect laptop for work, gaming, or everyday use.",
    subcategories: [
      {
        title: "By Brand",
        items: [
          { title: "Dell", href: "/category/laptops/dell" },
          { title: "HP", href: "/category/laptops/hp" },
          { title: "Lenovo", href: "/category/laptops/lenovo" },
          { title: "Apple", href: "/category/laptops/apple" },
          { title: "Asus", href: "/category/laptops/asus" },
          { title: "Acer", href: "/category/laptops/acer" },
        ],
      },
      {
        title: "By Type",
        items: [
          { title: "Gaming Laptops", href: "/category/laptops/gaming" },
          { title: "Ultrabooks", href: "/category/laptops/ultrabooks" },
          { title: "2-in-1 Laptops", href: "/category/laptops/2-in-1" },
          { title: "Chromebooks", href: "/category/laptops/chromebooks" },
        ],
      },
      {
        title: "By Price",
        items: [
          { title: "Budget (Under $500)", href: "/category/laptops/budget" },
          { title: "Mid-range ($500-$1000)", href: "/category/laptops/mid-range" },
          { title: "Premium ($1000-$1500)", href: "/category/laptops/premium" },
          { title: "High-end (Above $1500)", href: "/category/laptops/high-end" },
        ],
      },
    ],
  },
  {
    title: "Router and Switch",
    href: "/category/desktops",
    icon: <Monitor className="h-4 w-4 mr-2" />,
    description: "Powerful desktop computers for home, office, and gaming.",
    subcategories: [
      {
        title: "By Type",
        items: [
          { title: "Gaming PCs", href: "/category/desktops/gaming" },
          { title: "All-in-One PCs", href: "/category/desktops/all-in-one" },
          { title: "Mini PCs", href: "/category/desktops/mini" },
          { title: "Workstations", href: "/category/desktops/workstations" },
        ],
      },
      {
        title: "By Brand",
        items: [
          { title: "HP", href: "/category/desktops/hp" },
          { title: "Dell", href: "/category/desktops/dell" },
          { title: "Lenovo", href: "/category/desktops/lenovo" },
          { title: "Apple", href: "/category/desktops/apple" },
        ],
      },
    ],
  },
  {
    title: "Office Components",
    href: "/category/components",
    icon: <Cpu className="h-4 w-4 mr-2" />,
    description: "Build or upgrade your PC with our wide range of components.",
    subcategories: [
      {
        title: "Essential Components",
        items: [
          { title: "Processors (CPUs)", href: "/category/components/processors" },
          { title: "Motherboards", href: "/category/components/motherboards" },
          { title: "Graphics Cards", href: "/category/components/graphics-cards" },
          { title: "Memory (RAM)", href: "/category/components/ram" },
          { title: "Storage", href: "/category/components/storage" },
          { title: "Power Supplies", href: "/category/components/power-supplies" },
          { title: "PC Cases", href: "/category/components/cases" },
        ],
      },
      {
        title: "Software And Billing",
        items: [
          { title: "CPU Coolers", href: "/category/components/cpu-coolers" },
          { title: "Case Fans", href: "/category/components/case-fans" },
          { title: "Liquid Cooling", href: "/category/components/liquid-cooling" },
        ],
      },
    ],
  },
  // Other categories remain the same
  {
    title: "Accessories",
    href: "/category/peripherals",
    icon: <Headphones className="h-4 w-4 mr-2" />,
    description: "Enhance your setup with our selection of peripherals.",
    subcategories: [/* ... */],
  },
  {
    title: "CCTV and Security",
    href: "/category/storage",
    icon: <HardDrive className="h-4 w-4 mr-2" />,
    description: "Store your data securely with our storage solutions.",
    subcategories: [/* ... */],
  }
]

export function CategoryBar({ vertical = false }: { vertical?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Handle mouse over or click on category
  const handleInteraction = (categoryTitle: string) => {
    if (vertical) {
      // For vertical orientation, toggle the active state
      setActiveCategory(activeCategory === categoryTitle ? null : categoryTitle);
    } else {
      // For horizontal orientation, just set the active state
      setActiveCategory(categoryTitle);
    }
  };

  // Handle mouse leave for horizontal mode
  const handleMouseLeave = () => {
    if (!vertical) {
      setActiveCategory(null);
    }
  };

  // Animation styles for both orientations
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideDown {
      from { max-height: 0; opacity: 0; }
      to { max-height: 1000px; opacity: 1; }
    }
    
    .dropdown-animation {
      animation: fadeIn 0.2s ease-out forwards;
    }
    
    .dropdown-animation-vertical {
      animation: slideDown 0.3s ease-out forwards;
      overflow: hidden;
    }
  `;

  if (vertical) {
    // Vertical layout
    return (
      <div className="w-full">
        <style jsx global>{animationStyles}</style>
        
        <div className="flex flex-col w-full ">
          {categories.map((category) => (
            <div key={category.title} className="w-full">
              {/* Category button */}
              <button 
                onClick={() => handleInteraction(category.title)}
                className="flex items-center w-full p-3 text-left border-b border-gray-100 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
              >
                {category.icon}
                <span className="flex-grow">{category.title}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeCategory === category.title ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown for this specific category */}
              {activeCategory === category.title && (
                <div className="bg-white dropdown-animation-vertical">
                  <div className="p-3">
                    {category.subcategories?.map((subcategory) => (
                      <div key={subcategory.title} className="mb-4">
                        <h3 className="font-medium mb-2 text-green-700 text-sm">{subcategory.title}</h3>
                        <ul className="space-y-2 pl-2">
                          {subcategory.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // Horizontal layout
    return (
      <div className="w-full  relative mt-5 " onMouseLeave={handleMouseLeave}>
        <style jsx global>{animationStyles}</style>
        
        {/* Main navigation bar */}
        <div className="flex flex-wrap justify-around w-full bg-[#03913F] h-10 items-center rounded-xs">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="h-full"
              onMouseEnter={() => handleInteraction(category.title)}
            >
              <Link 
                href={category.href}
                className="flex h-full items-center px-4 text-[var(--text-color-drop-down)] montserrat-regular font-stretch font- hover:bg-[#037a2f] transition-colors duration-200"
              >
                <span>{category.title}</span>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Full-width dropdown that appears below the navbar */}
        {activeCategory && (
          <div className="absolute left-0 right-0 w-full mt-0 z-50 dropdown-animation">
            <div className="bg-white shadow-lg rounded-b-md overflow-hidden">
              {categories.map((category) => (
                category.title === activeCategory && (
                  <div key={`dropdown-${category.title}`} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.subcategories?.map((subcategory) => (
                        <div key={subcategory.title}>
                          <h3 className="font-medium mb-3 text-green-700">{subcategory.title}</h3>
                          <ul className="space-y-2">
                            {subcategory.items.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-700 hover:text-green-600 hover:underline"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}