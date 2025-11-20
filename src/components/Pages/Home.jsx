import React from 'react'
import Profimg from '../images/certificates/WhatsApp Image 2025-11-20 at 11.38.20_15a17c96.jpg'
import Projects from './Projects'


import Skills from './Skills'
import Certificate from './Certificate'
// import Contact from './Contact'
import Footer from './Footer'
import Resume from './Resume'
const Home = () => {
  return (
    <div>

      <div className="home">
       
        <div className="profile">
          <img src={Profimg} height={'200px'} width={'200px'} />
        </div>
      <h1>Hello, I'm Aman 👋</h1>
      <p>A Frontend Developer passionate about creating interactive web applications and experiences.</p>
  
      <div class="card">
        <div className='main'>
        <div class="loader">
        <p>I'am....</p>
          <div class="words">
            <span class="word">Designer</span>
            <span class="word">Designer</span>
            <span class="word">Developer</span>
            <span class="word">Web Enthusiast</span>
            <span class="word">Problem solver</span>
            <span class="word">React Developer</span>
          </div>
        </div>
          <Resume/>
      </div>
    </div>
    </div> 
    <hr className='hr'/>
    <br />
    <br />
    <Skills/>
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <hr className='hr'/>
   <Projects/>
   <hr className='hr'/>
   <Certificate />
   <hr className='hr'/>
   <Footer/>
    </div>
  )
}

export default Home
