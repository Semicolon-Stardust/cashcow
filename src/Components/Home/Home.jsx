import React from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import FAQs from './FAQs'

function Home() {
  return (
    <div>
        <div>
            <Hero/>
        </div>

        <div>
            <Features/>
        </div>

        <div>
            <HowItWorks/>
        </div>

        <div>
            <Pricing/>
        </div>

        <div>
            <FAQs/>
        </div>

    </div>
  )
}

export default Home