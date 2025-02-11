"use client"

import React from 'react'
import { home } from "../dummy.json";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section1 = () => {
    return (
        <div className='w-full p-10 max-sm:p-5 flex flex-col gap-5'>
            <div className='max-sm:block hidden max-sm:w-full p-3 relative'>
                <img className='absolute bottom-6 left-8' width="18" height="18" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/search_icon.svg" alt="Searh Icon"></img>
                <input className='px-14 max-sm:text-xs p-3 w-full rounded-lg border shadow-md text-left outline-none' placeholder="Search Lab tests, doctors, skincare etc."></input>
            </div>
            <div className='w-full max-sm:pt-0 flex overflow-x-auto scrollbar-none px-40 max-sm:px-5 justify-center max-sm:justify-start gap-20 max-sm:gap-8 select-none'>
                {
                    home.section1.images.map((e, index) => {
                        return <span key={"sec1_img" + index} className='flex cursor-pointer flex-col h-full w-36 max-sm:min-w-20 align-middle gap-2'>
                            <img className='w-full h-full max-sm:h-20 max-sm:object-cover object-contain' src={e.src}></img>
                            <p className='self-center max-sm:text-center text-sm max-sm:text-[12px] max-sm:whitespace-normal whitespace-nowrap'>{e.text}</p>
                        </span>
                    })
                }
            </div>
            <div className='w-full flex px-32 max-sm:px-0 p-5 select-none relative'>
                <Carousel showArrows={false} infiniteLoop swipeable emulateTouch showThumbs={false} showIndicators={false} showStatus={false} autoPlay>
                    <img className='rounded-xl' src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/Ayushman_Web_Banner-web.jpg" alt="caraousel1" />
                    <img className='rounded-xl' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/09/skincare-web-desktop.webp" alt="caraousel2" />
                    <img className='rounded-xl' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/06/cosmetologist-consult_homepage-banner-desktop.webp" alt="caraousel3" />
                    <img className='rounded-xl' src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/Ayushman_Web_Banner.jpg" alt="caraousel4" />
                </Carousel>
                <div className='absolute max-sm:hidden bottom-0 left-[35%] w-1/3'>
                    <img className='absolute bottom-4 left-3' width="18" height="18" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/search_icon.svg" alt="Searh Icon"></img>
                    <input className='px-14 p-3 w-full rounded-lg border shadow-md text-left outline-none' placeholder="Search Lab tests, doctors, skincare etc."></input>
                </div>
            </div>
            <div id="social-information" className='flex w-full h-12 justify-around mt-10 max-sm:mt-0 px-20 max-sm:px-0'>
                <div className='flex gap-5 text-md max-sm:gap-2 max-sm:p-1  max-sm:text-xs max-sm:whitespace-normal whitespace-nowrap items-center'>
                    <img width="100%" height="100%" className='max-sm:size-10' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/cirtificate.svg" alt="Satisfied Customers" />
                    10L+ Satisfied Customers
                </div>
                <div className='flex gap-5 text-md max-sm:gap-2 max-sm:p-1 max-sm:text-xs max-sm:whitespace-normal whitespace-nowrap items-center'>
                    <img width="100%" height="100%" className='max-sm:size-10' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/play.svg" alt="Google Play" />
                    4.7 ⭐ on Google Play
                </div>
                <div className='flex gap-5 text-md max-sm:gap-2 max-sm:p-1 max-sm:text-xs max-sm:whitespace-normal whitespace-nowrap items-center'>
                    <img width="100%" height="100%" className='max-sm:size-10' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/user-2.svg" alt="MFine Doctors" />
                    4k+ Doctors in MFine
                </div>
            </div>
        </div>
    )
}

export default Section1
