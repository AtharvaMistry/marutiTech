import React from 'react'
import Header from './Header'
import Intro1 from './Intro1'
import Intro2 from './Intro2'
import Technology from './Technology'
import Values from './Values'
import Portfolio from './Portfolio'
import WhyWe from './WhyWe'
import Footer from './Footer'
import Carousel from './Carousel'

function Layout() {
    return (
        <div className="container min-w-full">
            <div className="fixed top-0 right-0 left-0">
                <Header />
            </div>
            <div className='h-screen mt-[50px]'>
                <Intro1/>
                <Carousel />
                <Intro2 />
                <Technology />
                <Values />
                <Portfolio />
                <WhyWe />
                <Footer />
            </div>

        </div>
    )
}

export default Layout