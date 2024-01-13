import React from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import FAQs from './FAQs'

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

        <div id='pricing' className='my-12'>
            <Pricing/>
        </div>

        <div id='FAQs' className='my-12'>
            <FAQs/>
        </div>

    </div>
  )
}

export default Home