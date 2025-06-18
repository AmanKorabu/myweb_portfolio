import React from 'react'
import Profimg from '../images/WhatsApp Image 2025-06-17 at 20.05.06_3b64f5c6.jpg'
import Projects from './Projects'


import Skills from './Skills'
import Certificate from './Certificate'
// import Contact from './Contact'
import Footer from './Footer'
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
          <p>I'm-</p>
          <div class="words">
            <span class="word">Developer</span>
            <span class="word">Designer</span>
            <span class="word">Coder</span>
            <span class="word">Problem solver</span>
            <span class="word">React Developer</span>
          </div>
        </div>
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
