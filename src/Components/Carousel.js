import React from 'react'
import { Carousel } from 'antd';
import './Style.css';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};
function Carousels() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className="col-span-1 grid grid-cols-6 py-10 sm:px-5 md:px-10 lg:px-20">

            <div className='col-span-6 text-center'>

                <span className='text-[var(--dark)]'>Whether you’re a budding startup or a Fortune 500 company - <span className='text-[var(--blue)]'>We’ve got you.</span></span>

            </div>
            <div className='col-span-6  '>
                <Carousel afterChange={onChange}>
                    <div>
                        <div style={contentStyle} className='flex justify-center items-center'>
                            <img src="/Images/slido.png" alt="" className='w-44' />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className='flex justify-center items-center'>
                            <img src="/Images/slido.png" alt="" className='w-44' />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className='flex justify-center items-center'>
                            <img src="/Images/slido.png" alt="" className='w-44' />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className='flex justify-center items-center'>
                            <img src="/Images/slido.png" alt="" className='w-44' />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Carousels;