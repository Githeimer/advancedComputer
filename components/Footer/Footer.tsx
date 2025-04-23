import React from 'react'
import { Mail, Phone, MapPin, ShoppingBag, Info, Send } from 'lucide-react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Logo from '../navigation/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[var(--ad-bar-bg)] text-white py-10 ">
      <div className="landing_container *:mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center">
          {/* Logo and Contact Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
             <Logo></Logo>
    
            </div>
            
            {/* Phone Numbers */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+123456789" className="hover:text-blue-300">+977 9802050888</a>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:phone-classic" className="text-xl mr-2" />
                <a href="tel:+987654321" className="hover:text-blue-300">011-660888</a>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-center">
             <Icon icon="mdi:whatsapp" className="text-xl mr-2 text-green-500" />
              <a href="https://wa.me/9802050888" className="hover:text-green-300">WhatsApp Us <span className='text-gray-500 text-sm'>(9802050888)</span></a>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:dulalhimesh@gmail.com" className="hover:text-blue-300">advancecomputer@gmail.com</a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex w-full items-center justify-center text-gray-200">
              <ShoppingBag size={18} className="mr-2" />
              Categories
            </h3>
           <div className='flex flex-row w-full gap-12 justify-between text-gray-400'>
           <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Laptops & Desktop</a></li>
              <li><a href="#" className="hover:text-blue-300">Router and Switches</a></li>
              <li><a href="#" className="hover:text-blue-300">Software And Billing</a></li>
              <li><a href="#" className="hover:text-blue-300">CCTV and Security</a></li>
              <li><a href="#" className="hover:text-blue-300">Office Accessories</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Laptops & Desktop</a></li>
              <li><a href="#" className="hover:text-blue-300">Router and Switches</a></li>
              <li><a href="#" className="hover:text-blue-300">Software And Billing</a></li>
              <li><a href="#" className="hover:text-blue-300">CCTV and Security</a></li>
              <li><a href="#" className="hover:text-blue-300">Office Accessories</a></li>
            </ul>
           </div>
          </div>
          
       
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-sm">Stay updated with our latest offers and news</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l bg-white placeholder:text-black w-full focus:outline-none" 
              />
              <button className="bg-[var(--fill-color)] p-2 rounded-r cursor-pointer flex items-center justify-center">
                <Send size={16}  />
              </button>
            </div>
            
            {/* Store Location */}
            <div className="mt-6">
            <Link href="https://maps.app.goo.gl/Yu61K5N2wgZovMzR8">
            <div className="flex items-center gap-1 cursor-pointer monsterrat font-normal">
              <Icon icon="weui:location-filled" className="text-xl" />
              <span className="hover-underline">Store Location</span>
            </div>
          </Link>
              <a href="https://maps.app.goo.gl/Yu61K5N2wgZovMzR8" className="text-sm hover:text-blue-300">
               Chardobato Banepa, Kavre, Nepal
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Advance Computer Infosys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer