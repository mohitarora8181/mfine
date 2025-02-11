import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-[#21272d] pt-20 text-sm'>
            <div className='w-full flex max-sm:flex-col justify-between p-10 max-sm:p-0'>
                <div className='flex flex-col gap-20 max-sm:gap-8 max-sm:items-center'>
                    <img className='w-28' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/logo.svg" />
                    <div className='flex flex-col gap-10 max-sm:gap-8'>
                        <span className='w-full max-sm:justify-center flex gap-3 text-[#337ab7]'>
                            <a href="https://www.instagram.com/accounts/login/?next=/mfine_care/" target="_blank" rel="noopener noreferrer">
                                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/instagram-new.svg" alt="instagram" width="24" height="24" />
                            </a>
                            <a href="https://twitter.com/mfinecare" target="_blank" rel="noopener noreferrer">
                                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/01/x.svg" alt="twitter" width="24" height="24" />
                            </a>
                            <a href="https://www.facebook.com/mfinecare/" target="_blank" rel="noopener noreferrer">
                                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/facebook-new.svg" alt="facebook" width="24" height="24" />
                            </a>
                            <a href="https://www.youtube.com/c/mfinecare/featured" target="_blank" rel="noopener noreferrer">
                                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/youtube-new.svg" alt="youtube" width="24" height="24" />
                            </a>
                            <a href="https://www.linkedin.com/company/mfine/" target="_blank" rel="noopener noreferrer">
                                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2024/01/linkedin.svg" alt="Linked" width="24" height="24" />
                            </a>
                        </span>
                        <span className='flex gap-5'>
                            <a aria-label="app-store" href="https://www.mfine.co/mfineonelink">
                                <img className='max-sm:w-32' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/12/app-store.svg" alt="app-store" width="100%" height="100%" loading="lazy" />
                            </a>
                            <a aria-label="app-store" href="https://www.mfine.co/mfineonelink">
                                <img className='max-sm:w-32' src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/12/google-play.svg" alt="google-play store" width="100%" height="100%" loading="lazy" />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='flex max-sm:px-5 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 max-sm:py-10 px-20 gap-28 justify-around'>
                    <span className='h-full gap-2 flex flex-col text-[#6d8298]'>
                        <h2 className='text-[#c6d6e6] font-semibold mb-4 max-sm:mb-2'>MFine</h2>
                        <a href="https://www.mfine.co/about-us">About</a>
                        <a href="https://www.mfine.co/article">Blog</a>
                        <a href="https://mfine.darwinbox.in/ms/candidate/careers">Careers</a>
                        <a href="https://www.mfine.co/press">Press</a>
                        <a href="https://www.mfine.co/contact-us">Contact Us</a>
                        <a href="https://www.mfine.co/privacy-policy">Privacy Policy</a>
                        <a href="https://www.mfine.co/terms-of-use">Terms of Use</a>
                    </span>
                    <span className='h-full gap-2 flex flex-col text-[#6d8298]'>
                        <h2 className='text-[#c6d6e6] font-semibold mb-4 max-sm:mb-2'>Derma Essentials</h2>
                        <a href="https://www.mfine.co/skincare/acne-treatment">Acne Treatment</a>
                        <a href="https://www.mfine.co/skincare/pigmentation-treatment">Pigmentation</a>
                        <a href="https://www.mfine.co/skincare/dark-circle-treatment">Dark Circles</a>
                        <a href="https://www.mfine.co/skincare/antiageing-treatment">Skin Ageing</a>
                    </span>
                    <span className='h-full gap-2 flex flex-col text-[#6d8298]'>
                        <h2 className='text-[#c6d6e6] font-semibold mb-4 max-sm:mb-2'>Our Services</h2>
                        <a href="https://www.mfine.co/online-doctor-consultation/">Consultation</a>
                        <a href="https://www.mfine.co/lab-test">Lab Tests</a>
                        <a href="https://www.mfine.co/health-packages">Health
                            Packages</a>
                        <a href="https://www.mfine.co/diagnostic-tests">Scans &amp;
                            X-Rays</a>

                        <a href="https://www.mfine.co/long-term-care-plans">Long Term Care
                            Plans</a>
                    </span>
                    <span className='h-full gap-2 flex flex-col text-[#6d8298]'>
                        <h2 className='text-[#c6d6e6] font-semibold mb-4 max-sm:mb-2'>Health Tools</h2>
                        <a href="https://www.mfine.co/health-tools/bp-monitoring-app">Blood
                            Pressure
                            Monitor</a>
                        <a href="https://play.google.com/store/apps/details?id=com.mfine&amp;referrer=utm_source%3Dwebsite%26utm_medium%3Dstatic_foot%26utm_campaign%3Dspo2_trkr">SPO2 Tracker</a>
                        <a href="https://play.google.com/store/apps/details?id=com.mfine&amp;referrer=utm_source%3Dwebsite%26utm_medium%3Dstatic_foot%26utm_campaign%3Dheart_rate_monitor">Heart Rate
                            Monitor</a>
                        <a href="https://www.mfine.co/health-tools/period-calculator">Period
                            Tracker</a>
                        <a href="https://www.mfine.co/self-checks">Self Checks</a>
                    </span>
                </div>
            </div>
            <div className='w-full border-t flex max-sm:flex-col justify-between p-5 px-10 border-t-[#6d8298] items-center max-sm:gap-5'>
                <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/iso.png" alt="" className='w-40 h-[4rem] max-sm:h-[3rem] max-sm:w-32 ' loading="lazy" />
                <p className='text-[#6d8298]'>2024 © mfine™ Pvt Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
