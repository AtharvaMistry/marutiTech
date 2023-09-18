import React from 'react'
import './Style.css';
function Intro1() {
    return (
        <div className="grid grid-cols-1 place-items-center backgroud py-5 sm:grid-cols-2 sm:px-5 md:px-10 lg:px-20">
            <div className="col-span-1 max-w-[300px] lg:max-w-[500px]">
                <img src="/Images/firstImg.png" alt="" />
            </div>
            <div className="col-span-1 text-center max-w-[300px] lg:max-w-[500px]">
                <p className='px-1 font-light text-sm text-[var(--light)]  lg:text-xl'>Welcome to <span className='text-[var(--blue)]'>MarutiTech Solution!</span></p>
                <p className='text-[var(--dark)] font-semibold my-3 text-xl  lg:text-2xl'>Build Innovative Software  Products that Scale with us !</p>
                <p className='text-[var(--medium)] mb-3  lg:text-xl'>Bring your ideas to life!</p>
                <button className='bg-[var(--blue)] text-white px-2 py-1 rounded-md  lg:text-xl'>Get In Touch</button>
            </div>
        </div>
    )
}

export default Intro1