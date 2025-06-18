import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <div>
       <div className="contact-card">
      <h2>Contact Me</h2>
      <p>Let's connect with me on social media !</p>
      <div className="icon-container">
        <a href="https://wa.me/8087115499" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/itz.aman.ak.7?igsh=MWh1bTA0cnp4cTJvcg==" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aman-korabu-ab1a9b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AmanKorabu" target="_blank" rel="noopener noreferrer" className="icon github">
          <FaGithub />
        </a>
      </div>
    </div>
    <footer className="footer">
      <p>&copy; 2025 Aman Korabu. All rights reserved.</p>
      <p>Designed and Developed by Aman Korabu</p> 
    </footer>
    </div>
  )
}

export default Footer
