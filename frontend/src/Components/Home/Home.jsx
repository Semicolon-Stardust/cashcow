import React from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import FAQs from './FAQs'
import About from './About'

function Home() {
  return (
    <div>
        <div id='hero' className='my-12'>
            <Hero/>
        </div>

        <div id='features' className='my-12'>
            <Features/>
        </div>

        <div id='howitworks' className='my-12'>
            <HowItWorks/>
        </div>

        <div id='' className='my-12'>
            
        </div>

        <div id='FAQs' className='my-12'>
            <FAQs/>
        </div>

        <div>
            <About/>
        </div>

    </div>
  )
}

export default Home