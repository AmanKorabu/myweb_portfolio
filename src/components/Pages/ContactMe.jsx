import React from 'react'
import img from '../images/TW_Contact_Us.png'
import Footer from './Footer'
function ContactMe() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a68751f-e897-4a70-aa30-c7e1fd0967a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
      <div>
      <div className="contact-container">
          <form onSubmit={onSubmit} className='contact-left'>
              <div className="contact-left-title">
                    <h2>Get in touch with me:</h2>

                </div>
                <input type="text" name='name' placeholder='your name please' className='contact-inputs' required />
                <input type="text" name='email' placeholder='your Email please' className='contact-inputs' required />
                <textarea name="message"  placeholder='Your message please' className='contact-inputs' required></textarea>
                <button class="button">
                    Get in touch
                    <div class="hoverEffect">
                        <div></div>
                    </div>
                </button>
            </form>
            <span>{result}</span>
            <div className="contact-right">
            <img src={img} alt="contact-img" />
            </div>
        </div>
        <Footer/>

        </div>
    )
}

export default ContactMe
