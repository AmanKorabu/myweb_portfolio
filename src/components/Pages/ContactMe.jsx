import React from 'react'
import img from '../images/TW_Contact_Us.png'
import Footer from './Footer'
function ContactMe() {
    return (
        <div>
        <div className="contact-container">
            <form action="" className='contact-left'>
                <div className="contact-left-title">
                    <h2>Get in touch with me:</h2>

                </div>
                <input type="text" placeholder='your name please' className='contact-inputs' required />
                <input type="text" placeholder='your Email please' className='contact-inputs' required />
                <textarea name="message" id="txtS" placeholder='Your message please' className='contact-inputs' required></textarea>
                <button class="button">
                    Get in touch
                    <div class="hoverEffect">
                        <div></div>
                    </div>
                </button>
            </form>
            <div className="contact-right">
            <img src={img} alt="contact-img" />
            </div>
        </div>
        <Footer/>

        </div>
    )
}

export default ContactMe
