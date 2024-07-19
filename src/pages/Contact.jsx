import React from 'react'
import '../styles/Contact.css'
import Navbar from '../Components/Navbar'
function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d7dc8a8-4e90-4530-a1ff-53e5f4a57f46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
        <Navbar/>
      <div className="email-section">
      <h2>Get in touch, send us an email</h2>
      <form onSubmit={onSubmit}>
        <div className="inputs">
        <label>Your Name</label>
        <input type="text" placeholder='Enter your name here' required/>
        <label>Your Email</label>
        <input type="email" placeholder='Enter your email here' required/>
        <label>Write your mobile number</label>
        <input type="tel" name="phone" placeholder='Enter your mobile number'required/>
        <label>Write Your Message Here</label>
        <textarea className="text-area"name='message' rows="6" placeholder='enter your message'required></textarea>
      </div>
        <button type='submit' className='btn'>Submit Message</button>
      </form>
      <span>{result}</span>
      </div>
      <div className="whatsapp section">
      <a 
        href="https://wa.me/+254720857776"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
    </div>
  )
}

export default Contact

