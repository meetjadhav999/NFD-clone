import React from 'react'
import '../css/about.css'

function About() {

    
  return (
    <div className='white-wrapper'>
      <div className='about'>
        <div className='about-div1' id='about-div'>
            <h2>The first web3 crypto platform</h2>
            <h3>Problem</h3>
            <p>Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.</p>
            <h2>We work to make your life easier</h2>
            <h3>Solution</h3>
            <p>NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</p>
        </div>
        <div className='about-div2'>
            <div className='about-div2-img'>
                <img src={require('../css/images/block1OPT.webp')} className='about-img-block'></img>

                <img src={require('../css/images/cubeBrokenOPT.webp')} className='about-img-cube'></img>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
