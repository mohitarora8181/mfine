import React from 'react'
import { home } from '../dummy.json';

const Section2 = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-5 px-40 max-sm:px-5'>
            <div className=''>
                <img draggable={false} className='rounded-2xl max-sm:h-32' src="./sec2_img1.png" />
            </div>
            <div className='w-full flex gap-5 py-10 pb-5 max-sm:overflow-x-scroll max-sm:scrollbar-none'>
                {
                    home.section2.items.map((e, index) => {
                        return <div key={"sec2_item" + index} className='flex cursor-pointer w-48 max-sm:min-w-44 shadow-md flex-col gap-2 rounded-xl overflow-hidden'>
                            <img draggable={false} src={e.src} />
                            <span className='flex flex-col h-full gap-2 flex-wrap justify-between text-sm p-2'>
                                <p className='text-[#38434e]'>{e.title}</p>
                                <span className='flex gap-2 flex-wrap items-baseline'>
                                    <p className='line-through text-[12px] text-gray-600'>{e.price.actual}</p>
                                    <p className=' font-semibold text-base'>{e.price.discounted}</p>
                                    <p className='text-[#fa5426] text-[12px] font-semibold'>{e.price.percent}</p>
                                </span>
                            </span>
                        </div>
                    })
                }
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-[#2297be] max-sm:w-full max-sm:bg-white max-sm:border border-[#2297be] max-sm:text-[#2297be] text-white rounded-xl p-2 px-4'>
                    View all
                </button>
            </div>
        </div>
    )
}

export default Section2
