import React from 'react'
import '../css/teams.css'
function Teams() {
  return (
    <div className='teams'>
      <div className='team-text'>
        <h2>We are delighted to introduce the NFD team members to you</h2>
        <p>NFD team is always open to new partnerships and new team members, so if you have a desire to join and you have a big experience in development or crypto - just leave your request in form and we will consider it.</p>
        <button className='purple-button'>
                            <div className='p-btn-div1 sticky-div-btn-sides'></div>
                            <div className='p-btn-div2 sticky-div-btn-center'>Start creating</div>
                            <div className='p-btn-div3 sticky-div-btn-sides'></div>
                        </button>
      </div>
      <div className='team-members'>
        <div className='background-shadow'>
            <img src={require('../css/images/image.webp')}></img>
        </div>
        <div className='team-container'>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic'>
                        <div className='pic'>
                        <img src={require('../css/images/villiam.webp')}></img>

                        </div>
                        <div className='profile-dot'></div>
                    </div>
                    <h5>William</h5>
                    <h6>CTO</h6>
                </div>
            </div>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic orange-border'>
                        <div className='pic orange'>
                        <img src={require('../css/images/leo.webp')}></img>

                        </div>
                        <div className='profile-dot orange'></div>
                    </div>
                    <h5>Leo</h5>
                    <h6>CEO</h6>
                </div>
                </div>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic green-border'>
                        <div className='pic green'>
                        <img src={require('../css/images/vadim.webp')}></img>

                        </div>
                        <div className='profile-dot green'></div>
                    </div>
                    <h5>Vadim</h5>
                    <h6>CCO</h6>
                </div>
                </div>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic blue-border'>
                        <div className='pic blue'>
                        <img src={require('../css/images/vitale.webp')}></img>

                        </div>
                        <div className='profile-dot blue'></div>
                    </div>
                    <h5>Vitale</h5>
                    <h6>Team Lead full stack</h6>
                </div>
                </div>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic grey-border'>
                        <div className='pic grey'>
                        <img src={require('../css/images/nikita.webp')}></img>

                        </div>
                        <div className='profile-dot grey'></div>
                    </div>
                    <h5>Nikita</h5>
                    <h6>Frontend Developer</h6>
                </div>
                </div>
            <div className='member'>
                <div className='profile'>
                    <div className='profile-pic pink-border'>
                        <div className='pic pink'>
                        <img src={require('../css/images/den.webp')}></img>

                        </div>
                        <div className='profile-dot pink'></div>
                    </div>
                    <h5>Den</h5>
                    <h6>Backend Developer</h6>
                </div>
            </div>
        </div>

      </div>
      

    </div>
  )
}

export default Teams
