import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full fixed flex h-[4rem] px-32 justify-around shadow-md shadow-gray-200 bg-white z-50'>
            <img className='object-contain p-4 cursor-pointer' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/logo.svg" alt="usericon"></img>
            <div className='w-full flex justify-end'>
                <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                    <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>Our Services</p>
                </span>
                <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                    <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>About us</p>
                </span>
                <span className='h-full flex align-middle hover:bg-[#2297be0f] border-2 border-transparent hover:border-b-[#2297be] cursor-pointer'>
                    <p className='text-center self-center p-2 px-6 text-sm text-[#38434e] font-medium'>Home</p>
                </span>
                <div className='flex gap-2 p-3 px-5'>
                    <button className=' hover:shadow-xl transition-all p-2 px-6 rounded-xl text-sm bg-gradient-to-b text-white from-[#ffa38c] to-[#fc6b47]'>
                        Get Our App
                    </button>
                    <button className=' hover:shadow-xl transition-all p-2 px-6 rounded-xl text-sm  text-[#fc6b47] border border-[#fc6b47]'>
                        Login / Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
