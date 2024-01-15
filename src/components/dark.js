import React from 'react'
import '../css/dark.css'

function Dark() {
  return (
    <div className='dark-div'>
      <div className='white-cut'>
        <div className='white-cut1'></div>
        <svg className='white-cut2' width="168" height="93" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M168.184 93H1521.78c7.82 0 15.33 3.108 20.86 8.64 18.58 18.584 5.42 50.36-20.86 50.36H-526.263c-33.354 0-57.358-32.038-47.986-64.049l15.224-52C-552.787 14.643-533.243 0-511.04 0H-1.184A50 50 0 0 1 26.62 8.444l113.76 76.112A50.002 50.002 0 0 0 168.184 93Z" fill="#fff"></path></svg>

      </div>
      <div className='content'>
        <div className='content-align'>
            <div className='content-img'>
                <div className='aggcontent'>

                    <img src={require('../css/images/AggContentOPT.webp')}></img>
                    <img src={require('../css/images/AggContent2OPT.webp')}></img>
                </div>
                <div className='empty-div'></div>
            </div>
            <div className='stickydiv'>
                <img src={require('../css/images/AggOverlayOPT.webp')}></img>
                <div className='sticky-text'>
                    <h3>FIRST WEB3 CRYPTO</h3>
                    <h2>Keeping track of projects in <span>one place</span></h2>
                    <p>The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.</p>
                    <div className='left-side-btns jc-flex-start'>
                        <button className='purple-button'>
                            <div className='p-btn-div1 sticky-div-btn-sides'></div>
                            <div className='p-btn-div2 sticky-div-btn-center'>Start creating</div>
                            <div className='p-btn-div3 sticky-div-btn-sides'></div>
                        </button>
                        <a className='whitetext'>View roadmap</a>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      <div className='white-cut white-cut-bottom'>
          <div className='white-cut1 smaller'></div>
          <svg className='white-cut2 inverse' width="168" height="93" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M168.184 93H1521.78c7.82 0 15.33 3.108 20.86 8.64 18.58 18.584 5.42 50.36-20.86 50.36H-526.263c-33.354 0-57.358-32.038-47.986-64.049l15.224-52C-552.787 14.643-533.243 0-511.04 0H-1.184A50 50 0 0 1 26.62 8.444l113.76 76.112A50.002 50.002 0 0 0 168.184 93Z" fill="#fff"></path></svg>

        </div>
    </div>
  )
}

export default Dark
