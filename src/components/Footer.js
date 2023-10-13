import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>RomanBurger</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                 molestiae delectus culpa hic assumenda, voluptate reprehenderit
                 dolore autem cum ullam sed odit perspiciatis.</p>
                 <div className='flex justify-between md:w-[45%] my-6 '>
                    <FaFacebookSquare size={30} className='hover:scale-105 hover:text-white cursor-pointer'/>
                    <FaInstagram size={30} className='hover:scale-105 hover:text-white cursor-pointer'/>
                    <FaTwitterSquare size={30} className='hover:scale-105 hover:text-white cursor-pointer'/>
                 </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6 ml-6 '>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Berlin</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Hamburg</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Bremen</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>About Us</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>About us</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Board</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Family</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Contact Us</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Contact</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Career</li>
                        <li className='py-2 text-sm hover:text-white cursor-pointer'>Company vision</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer