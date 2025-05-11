import React from 'react'
import { ProductCard } from '@/types/product'

const ProductCardComponent = ({productDetails}:{productDetails:ProductCard}) => {
  return (
    <div className='flex flex-col items-center h-[233px] w-[174px] md:w-[266px] md:h-[319px] bg-white cursor-pointer relative justify-between'> 
       
        {(productDetails.discountPercent > 0 || 
          (productDetails.createdDate && 
           new Date(productDetails.createdDate) >= new Date(Date.now() - 14 * 24 * 60 * 60 * 1000))) && (
            // change color if needed for that sale and new arrival
            <div className='absolute top-[-5] right-0 bg-black text-white text-xs px-2 p-1 rounded-xs' style={{backgroundColor: productDetails.discountPercent > 0 ? '#0C3C43' : '#028755'}}> 
                {productDetails.discountPercent > 0 ? `${productDetails.discountPercent}% OFF` : "New Arrival"}
            </div>
        )}
        <div className='md:w-[244px] md:h-[183px] w-[140px] h-[96px] flex items-center justify-center'>
        <img src={productDetails.productImage} alt={productDetails.name} className='object-cover w-[80%] rounded-md mb-2' />
        </div>
        <hr className='sborder-1 w-[90%]'/>
       <div className='w-full px-3'>
         <h3 className=' text-[0.9rem] text-gray-800 font-sans  line-clamp-2 overflow-hidden text-ellipsis' style={{fontWeight:500}}>{productDetails.name}</h3>
      {productDetails.discountPercent > 0 && (
         <h2 className='text-[#7B9699]  line-through'>Rs {productDetails.price}</h2>
        )}
        <h2 className='text-[#0C3C43] font-semibold'>Rs {productDetails.price - (productDetails.price * productDetails.discountPercent / 100)}</h2>
       </div>
       <button className='bg-[#0C3C43] cursor-pointer text-white w-full text-sm md:text-sm md:h-[30px] rounded-sm mt-2 hover:bg-[#0c3c43dd]'>Add to Cart</button>
    </div>
  )
}


export default ProductCardComponent