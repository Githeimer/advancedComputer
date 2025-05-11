import React from 'react'


import {ProductCard} from '@/types/product'
import ProductCarousel from './ProductCarousel'

const FeaturedProducts = () => {

    // api call to get featured products
    // for now just random products

    const products : ProductCard[] = [
        {
            name: "Gaming Laptop Pro || RAM 16GB || SSD 1TB || RTX 4060 || 165Hz || 100% sRGB",
            product_id: "prod_001",
            price: 150000,
            createdDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
            discountPercent: 10,
            productImage: "https://yantranepal.com/wp-content/uploads/2024/06/Lenovo-Legion-Pro-5-16IRX9-Gaming-Intel-Core-i7-14650HX-Processor-16GB-DDR5-Ram-1TB-SSD-1622-WQXGA-IPS-100-sRGB-165Hz-Display-Nvidia-RTX-4060-8GB-Graphics-1.webp",
        },
        {
            name: "Mechanical Keyboard X Pro || RGB || Wireless || 60% ",
            product_id: "prod_002",
            price: 12000,
            createdDate: new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000), // 3 months ago
            discountPercent: 15,
            productImage: "https://tech.priyo.com/wp-content/uploads/2023/02/k6-wireless-03-500x500-1-1.jpg",
        },
        {
            name: "Ultra HD Monitor || 100Hz || 4K || 22 inch", 
            product_id: "prod_003",
            price: 30000,
            createdDate: new Date(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000), // 2 months ago
            discountPercent: 5,
            productImage: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/d/a/dahua-22-inch-100hz-monitor.webp",
        },
        {
            name: "Wireless Mouse || RGB || 1600 DPI",
            product_id: "prod_004",
            price: 5000,
            createdDate: new Date(),
            discountPercent: 0,
            productImage: "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/k/e/keychron-m1-wireless-mouse-black_1800x1800_1.jpg",
        },
        {
            name: "RGB Gaming Chair || Ergonomic || Adjustable Height || 360 Degree Rotation",
            product_id: "prod_005",
            price: 25000,
            createdDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
            discountPercent: 20,
            productImage: "https://kursinepal.com/wp-content/uploads/2024/06/game-3.jpg",
        },
        {
            name: "External SSD 1TB || USB 3.0 || Portable || Fast Transfer",
            product_id: "prod_006",
            price: 2500,
            createdDate: new Date(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000), // 4 months ago
            discountPercent: 0,
            productImage: "https://i5.walmartimages.com/asr/c8f4d2b4-3fa7-4d4d-b758-211541126a92.c31754a90ba80077534162ef17fd1b87.jpeg",
        },
    ];
    
  return (
    <div className='landing_container py-2'>
      <ProductCarousel  products={products} />
    </div>
  )
}




export default FeaturedProducts;