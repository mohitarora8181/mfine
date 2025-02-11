import React from 'react'
import { home } from '../dummy.json';

const Section3 = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-5 px-40'>
            <div className=''>
                <img draggable={false} className='rounded-2xl' src="./sec3_img1.png" />
            </div>
            <div className='w-full flex gap-5 py-10 pb-5'>
                {
                    home.section3.items.map((e, index) => {
                        return <div key={"sec3_item" + index} className='flex cursor-pointer w-60 py-2 shadow-lg border border-gray-200 flex-col gap-2 rounded-xl overflow-hidden'>
                            <span className='w-full py-3'>
                                <p className='text-sm text-white rounded-r-full p-2 px-4 font-semibold w-fit bg-gradient-to-tr from-[#66d0ef] to-[#2297be]'>{e.test_badge}</p>
                            </span>
                            <span className='flex flex-col h-full gap-5 flex-wrap justify-between text-sm p-3'>
                                <p className='text-[#38434e] font-semibold'>{e.test_name}</p>
                                <p className='text-[#38434e]'>{e.test_type}</p>
                                <span className='flex gap-2 flex-wrap items-baseline'>
                                    <p className='line-through text-[12px] text-gray-600'>{e.price.mrp}</p>
                                    <p className=' font-semibold text-base'>{e.price.offer_price}</p>
                                    <p className='text-[#fa5426] text-[12px] font-semibold'>{e.price.discount}</p>
                                </span>
                            </span>
                        </div>
                    })
                }
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-[#2297be] text-white rounded-xl p-2 px-4'>
                    View all
                </button>
            </div>
        </div>
    )
}

export default Section3
