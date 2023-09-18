import React from 'react'

function Values() {
    return (
        <div className="grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-5 md:px-10 md:gap-10 lg:grid-cols-4 lg:gap-20 lg:px-20">
            <div className="col-span-1 text-center sm:col-span-2 lg:col-span-4">
                <p className='text-[var(--dark)] text-xl'>How we <span className='text-[var(--blue)]'>think, create & iterate.</span></p>
                <p><span className='text-[var(--light)] text-sm'>We build things the Agile way</span></p>
            </div>
            <div className="col-span-1 grid grid-cols-3 border-b pb-5 border-[var(--blue)]">
                <div className="col-span-1">
                    <svg
                        viewBox="0 0 921.333 1000"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className='text-[var(--blue)] text-5xl'

                    >
                        <path d="M894 130c9.333-2.667 16.667-1.667 22 3 5.333 4.667 6.667 11 4 19-1.333 4-25.333 107.333-72 310s-71.333 308-74 316c-1.333 9.333-6 15.667-14 19s-16 3-24-1L488 662l-30-16 22-26c258.667-280 390-422 394-426 2.667-2.667 2.333-5.667-1-9s-6.333-3.667-9-1L314 586l-112-44-190-76c-8-2.667-12-6.667-12-12s4-9.333 12-12c5.333-2.667 152.333-55 441-157 288.667-102 435.667-153.667 441-155M312 858V654l160 82c-86.667 77.333-134 120-142 128-12 9.333-18 7.333-18-6" />
                    </svg>
                </div>
                <div className="col-span-2">
                    <p className='text-[var(--dark)] font-semibold'>Plan</p>
                    <p className='text-[var(--medium)] text-sm'>Convert the requirements
                        to a Beautiful ergonomic UI
                        with the best UX</p>
                </div>
            </div>

            <div className="col-span-1 grid grid-cols-3 border-b pb-5 border-[var(--blue)]">
                <div className="col-span-1">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className='text-[var(--blue)] text-5xl'

                    >
                        <path d="M22 9V7h-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-2h2v-2h-2v-2h2v-2h-2V9h2m-4 10H4V5h14v14M6 13h5v4H6v-4m6-6h4v3h-4V7M6 7h5v5H6V7m6 4h4v6h-4v-6z" />
                    </svg>
                </div>
                <div className="col-span-2">
                    <p className='text-[var(--dark)] font-semibold'>Develop</p>
                    <p className='text-[var(--medium)] text-sm'>Now we develop to bring
                        the mockups to life</p>
                </div>
            </div>

            <div className="col-span-1 grid grid-cols-3 border-b pb-5 border-[var(--blue)]">
                <div className="col-span-1">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className='text-[var(--blue)] text-5xl'

                    >
                        <path d="M7 2v2h1v14a4 4 0 004 4 4 4 0 004-4V4h1V2H7m4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5h-4V4h4v3z" />
                    </svg>
                </div>
                <div className="col-span-2">
                    <p className='text-[var(--dark)] font-semibold'>Test & Deploy</p>
                    <p className='text-[var(--medium)] text-sm'>We brainstorm requirements
                        and discuss deliverables.</p>
                </div>
            </div>

            <div className="col-span-1 grid grid-cols-3 border-b pb-5 border-[var(--blue)]">
                <div className="col-span-1">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className='text-[var(--blue)] text-5xl'

                    >
                        <path d="M3 4a2 2 0 00-2 2v11h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-5l-3-4h-3V4m-7 2l4 4-4 4v-3H4V9h6m7 .5h2.5l1.97 2.5H17M6 15.5A1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5 1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5m12 0a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5z" />
                    </svg>
                </div>
                <div className="col-span-2">
                    <p className='text-[var(--dark)] font-semibold'>Launch</p>
                    <p className='text-[var(--medium)] text-sm'>Ship once we believe we have delivered nothing but the best. </p>
                </div>
            </div>

        </div>
    )
}

export default Values