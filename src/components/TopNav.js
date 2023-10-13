import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from "react-icons/ai"
import {BsFillCartFill, BsPerson} from "react-icons/bs"
import {TbTruckReturn} from "react-icons/tb"
import {FaGoogleWallet} from "react-icons/fa"
import {MdHelp, MdOutlineFavorite} from "react-icons/md"

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4 bg-gray-300'>
        <div className='flex items-center'>
            <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
                <AiOutlineMenu size={25} className='lg:hidden'/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Roman
                <span className='font-bold'>Burger</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-1 text-bold cursor-pointer hover:bg-orange-900'>Gift Card</p>
                <p className='p-2 text-bold cursor-pointer px-3'>My Account</p>
                <p className='p-2 text-bold cursor-pointer px-3'>Delivery</p>
                <p className='p-2 text-bold cursor-pointer px-3'>Menu</p>
                <p className='p-2 text-bold cursor-pointer px-3'>Wallet</p>
                <p className='p-2 text-bold cursor-pointer px-3'>Contact</p>
                <p className='p-2 text-bold cursor-pointer px-3'>Help</p>
                
                
            </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search meals'></input>
        </div>
            <button className='bg-orange-700 text-white hidden md:flex items-center px-5 py-2 rounded-full hover:bg-orange-900'>
            <BsFillCartFill size={25} className='px-1'/>
            Cart</button>
            {
                sideNav ? (<div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                onClick={()=>setSideNav(!sideNav)}></div>
                ):("")
            }

            <div className={
                sideNav 
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={25} className='absolute right-4 cursor-pointer top-4'/>
                <h2 className='text-2xl p-4'>Roman<span className='text-orange-700 font-bold'>Burger</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex cursor-pointer hover:underline'>
                            <BsPerson size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            My Account
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:underline'>
                            <TbTruckReturn size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            Delivery
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:underline'>
                            <MdOutlineFavorite size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            My Favourite
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:underline'>
                            <FaGoogleWallet size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            My Wallet
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:underline'>
                            <MdHelp size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            Help
                        </li>
                    </ul>
                </nav>
                </div>
        
    </div>
  )
}

export default TopNav