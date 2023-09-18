import React, { useState } from 'react'
import { Button, Drawer, Radio, Space } from 'antd';
function Header() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-6 bg-[var(--alice)] h-[50px]">
                <div className="col-span-4">

                </div>
                <div className="col-span-2 flex justify-center items-center" onClick={showDrawer}>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,255.99579,255.99579 " className='text-[var(--blue)]'>
                        <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
                    </svg>

                </div>
            </div>
            <Drawer

                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

                <button onClick={() => setOpen(false)} className='fixed right-5 bottom-5'>
                    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" className='text-xl'>
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </Drawer>
        </>

    )
}

export default Header