import React from 'react'
import './Style.css'
function Intro2() {
    return (
        <div className="grid grid-cols-1 px-5 gap-y-5 backgroud py-10 sm:px-5 md:px-10 lg:px-20">

            <div className='col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-6'>

                <div className="col-span-1 text-center sm:col-span-6">
                    <p className='my-2 text-xl text-[var(--dark)]  lg:text-2xl'>We build immersive <span className='text-[var(--blue)]  lg:text-2xl'>experiences</span></p>
                    <p className='text-sm text-[var(--medium)]  lg:text-xl'>Propelius Technologies is focused on delivering quality, innovative solutions with groundbreaking technology.</p>
                </div>
                <div className="col-span-1 grid grid-cols-1 bg-[var(--alice)] text-center py-3 sm:col-span-3 lg:col-span-2">
                    <div className='flex justify-center items-center'>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className='text-[var(--blue)] text-5xl'

                        >
                            <path d="M8.95 13.4H6.58a5.5 5.5 0 010-2.8h2.37a11.56 11.56 0 00-.1 1.4 11.56 11.56 0 00.1 1.4M7.16 9.2H9.2a12.06 12.06 0 01.98-2.49A5.55 5.55 0 007.16 9.2m9.68 0a5.59 5.59 0 00-3.03-2.49 10.95 10.95 0 01.97 2.49M12 17.57a9.5 9.5 0 001.34-2.77h-2.68A9.5 9.5 0 0012 17.57m0-11.15a9.53 9.53 0 00-1.34 2.78h2.68A9.53 9.53 0 0012 6.42M7.16 14.8a5.61 5.61 0 003.02 2.49 12.06 12.06 0 01-.98-2.49M21 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2m-2 7a7 7 0 10-7 7 7 7 0 007-7m-3.85 0a11.56 11.56 0 01-.1 1.4h2.37a5.5 5.5 0 000-2.8h-2.37a11.56 11.56 0 01.1 1.4m-1.34 5.29a5.62 5.62 0 003.03-2.49h-2.06a10.95 10.95 0 01-.97 2.49m-3.45-6.69a8.81 8.81 0 000 2.8h3.28a10.3 10.3 0 00.11-1.4 10.21 10.21 0 00-.11-1.4z" />
                        </svg>
                    </div>
                    <p className='text-[var(--blue)] font-semibold'>Web Development</p>
                    <p className='text-[var(--dark)] text-sm'>We can help you build SAAS/ E-commerce or Progressive Web applications(PWA).</p>
                </div>
                <div className="col-span-1 bg-[var(--alice)] text-center py-3 sm:col-span-3 lg:col-span-2">
                    <div className='flex justify-center items-center'>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className='text-[var(--blue)] text-5xl'

                        >
                            <defs>
                                <style />
                            </defs>
                            <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </div>
                    <p className='text-[var(--blue)] font-semibold'>App Development</p>
                    <p className='text-[var(--dark)] text-sm'>We can build native iOS and Android apps using React Native, which is performant and cost-effective.</p>
                </div>
                <div className="col-span-1 bg-[var(--alice)] text-center py-3 sm:col-span-3 lg:col-span-2">
                    <div className='flex justify-center items-center'>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            className='text-[var(--blue)] text-5xl'

                        >
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                            <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
                            />
                        </svg>
                    </div>
                    <p className='text-[var(--blue)] font-semibold'>UI/UX Designer</p>
                    <p className='text-[var(--dark)] text-sm'>We ensure that all content within a user experience is delivered to the user at the right time, place, and format.</p>
                </div>
                <div className='hidden lg:block lg:col-span-1'>

                </div>
                <div className="col-span-1 bg-[var(--alice)] text-center py-3 sm:col-span-3 lg:col-span-2">
                    <div className='flex justify-center items-center'>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            className='text-[var(--blue)] text-5xl'

                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M11 7 A4 4 0 0 1 7 11 A4 4 0 0 1 3 7 A4 4 0 0 1 11 7 z" />
                            <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
                        </svg>
                    </div>
                    <p className='text-[var(--blue)] font-semibold'>Graphic Design</p>
                    <p className='text-[var(--dark)] text-sm'>We create visual content to communicate messages by applying visual hierarchy and page layout techniques.</p>
                </div>
                <div className='hidden sm:block sm:col-span-1 lg:hidden'>

                </div>
                <div className="col-span-1 bg-[var(--alice)] text-center py-3 sm:col-span-4 lg:col-span-2">
                    <div className='flex justify-center items-center'>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className='text-[var(--blue)] text-5xl'

                        >
                            <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" />
                        </svg>

                    </div>
                    <p className='text-[var(--blue)] font-semibold'>Strategic Partnerships</p>
                    <p className='text-[var(--dark)] text-sm'>We partner with start-ups and other IT consulting companies to provide them with best software developers at affordable rates.</p>
                </div>
                <div className='hidden sm:block sm:col-span-1 lg:col-span-1'>

                </div>
            </div>

        </div>
    )
}

export default Intro2