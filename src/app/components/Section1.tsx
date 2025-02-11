"use client"

import React from 'react'
import { home } from "../dummy.json";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section1 = () => {
    return (
        <div className='w-full p-10 flex flex-col gap-5'>
            <div className='w-full flex overflow-x-auto px-40 justify-center gap-20 select-none'>
                {
                    home.section1.images.map((e, index) => {
                        return <span key={"sec1_img" + index} className='flex cursor-pointer flex-col h-full w-32 align-middle gap-2'>
                            <img className='w-full h-full object-contain' src={e.src}></img>
                            <p className='self-center text-sm whitespace-nowrap'>{e.text}</p>
                        </span>
                    })
                }
            </div>
            <div className='w-full flex px-32 p-5 select-none relative'>
                <Carousel showArrows={false} infiniteLoop swipeable emulateTouch showThumbs={false} showIndicators={false} showStatus={false} autoPlay>
                    <img className='rounded-xl' src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/Ayushman_Web_Banner-web.jpg" alt="caraousel1" />
                    <img className='rounded-xl' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/09/skincare-web-desktop.webp" alt="caraousel2" />
                    <img className='rounded-xl' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/06/cosmetologist-consult_homepage-banner-desktop.webp" alt="caraousel3" />
                    <img className='rounded-xl' src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/Ayushman_Web_Banner.jpg" alt="caraousel4" />
                </Carousel>
                <div className='absolute bottom-0 left-[35%] w-1/3'>
                    <img className='absolute bottom-4 left-3' width="18" height="18" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/search_icon.svg" alt="Searh Icon"></img>
                    <input className='px-14 p-3 w-full rounded-lg border shadow-md text-left outline-none' placeholder="Search Lab tests, doctors, skincare etc."></input>
                </div>
            </div>
            <div id="social-information" className='flex w-full h-12 justify-around mt-10 px-20'>
                <div className='flex gap-5 text-md whitespace-nowrap items-center'>
                    <img width="100%" height="100%" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/cirtificate.svg" alt="Satisfied Customers" />
                    10L+ Satisfied Customers
                </div>
                <div className='flex gap-5 text-md whitespace-nowrap items-center'>
                    <img width="100%" height="100%" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/play.svg" alt="Google Play" />
                    4.7 ⭐ on Google Play
                </div>
                <div className='flex gap-5 text-md whitespace-nowrap items-center'>
                    <img width="100%" height="100%" src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/03/user-2.svg" alt="MFine Doctors" />
                    4k+ Doctors in MFine
                </div>
            </div>
        </div>
    )
}

export default Section1
