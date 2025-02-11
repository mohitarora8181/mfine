'use client'

import React, { useState } from 'react'

const NavBar = () => {

    const [isMenuOpen, toggleMenu] = useState(false);

    return (
        <div className='w-full fixed flex h-[4rem] max-sm:items-center max-sm:h-20 px-32 max-sm:py-1 max-sm:px-5 justify-around shadow-md shadow-gray-200 bg-white z-50'>
            {!isMenuOpen ? <svg className='hidden max-sm:block' onClick={() => { toggleMenu(true) }} fill="#000000" width="50px" height="50px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
                <title>menu-line</title>
                <path className="clr-i-outline clr-i-outline-path-1" d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"></path><path className="clr-i-outline clr-i-outline-path-2" d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"></path><path className="clr-i-outline clr-i-outline-path-3" d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"></path>
                <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
            </svg> :
                <svg className='hidden max-sm:block' onClick={() => { toggleMenu(false) }} width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                    <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                </svg>}
            <img className='object-contain p-4 cursor-pointer' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/logo.svg" alt="usericon"></img>
            <div className='w-full flex justify-end'>
                <div className={`max-sm:flex-col max-sm:absolute max-sm:top-20 max-sm:left-0 max-sm:z-[100] max-sm:p-10 max-sm:bg-white w-full flex justify-end max-sm:${isMenuOpen ? 'block' : 'hidden'}`}>
                    <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                        <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>Our Services</p>
                    </span>
                    <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                        <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>About us</p>
                    </span>
                    <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                        <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>Home</p>
                    </span>
                </div>
                <div className='flex gap-2 p-3 px-5 whitespace-nowrap'>
                    <button className=' hover:shadow-xl max-sm:hidden transition-all p-2 px-6 rounded-xl text-sm bg-gradient-to-b text-white from-[#ffa38c] to-[#fc6b47]'>
                        Get Our App
                    </button>
                    <button className=' hover:shadow-xl transition-all p-2 px-6 rounded-xl text-sm max-sm:text-white max-sm:bg-gradient-to-b from-[#ffa38c] to-[#fc6b47] text-[#fc6b47] border border-[#fc6b47]'>
                        Login / Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
