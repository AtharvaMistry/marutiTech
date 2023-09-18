import React from 'react'

function Technology() {
    return (
        <div className="grid grid-cols-5 my-5 gap-y-10 place-items-center sm:px-5 md:px-10 py-10 lg:px-20">
            <div className="col-span-5 py-3 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center" >
                    <img src="/Images/anime (4).jpg" alt="" className='md:max-w-[650px]' />
                </div>
                <div className="col-span-3 text-center px-4">
                    <p className='text-[var(--dark)] font-semibold my-3'>We are <span className='text-[var(--blue)]'>technology agnostic</span></p>
                    <p className='text-[var(--medium)] text-sm text-center'>Get valuable advice from industry specialists who cover a wide range of technological genres. Maintain current market trends and information to choose which technology is most suited for your forthcoming project.</p>
                </div>
            </div>

            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/technology (1).png" alt="" />
                <p className='text-[var(--blue)]'>React</p>
            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/technology (2).png" alt="" />
                <p className='text-[var(--blue)]'>Express</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/technology (3).png" alt="" />
                <p className='text-[var(--blue)]'>Node</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/technology (4).png" alt="" className='w-36' />
                <p className='text-[var(--blue)]'>React-native</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/technology (5).png" alt="" className='' />
                <p className='text-[var(--blue)]'>Flutter</p>
            </div>

            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/tech (1).png" alt="" />
                <p className='text-[var(--blue)]'>Firebase</p>
            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/tech (2).png" alt="" />
                <p className='text-[var(--blue)]'>AWS</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/tech (3).png" alt="" />
                <p className='text-[var(--blue)]'>Docker</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/tech (4).png" alt="" className='w-36' />
                <p className='text-[var(--blue)]'>GCP</p>

            </div>
            <div className='border border-[var(--blue)] rounded-md overflow-hidden text-center'>
                <img src="/Images/tech (5).png" alt="" className='' />
                <p className='text-[var(--blue)]'>Digital Ocean</p>
            </div>

        </div >
    )
}

export default Technology