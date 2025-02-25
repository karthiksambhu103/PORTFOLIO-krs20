import React, { useRef } from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import emailjs from '@emailjs/browser';
import web from './../../assets/web.png';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_q5uhz6f', 'template_x42i2sq', form.current, 'PJ2o8RAm4Uy1JAygw')
            .then(
                () => {
                    alert('Message sent successfully');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send message, please try again.');
                },
            );

    };

    return (
        <div className='section-container'>
            <Header heading="Get in touch" details="Interested to Collaborate? Feel free to drop an mail!" />

            {/* Form Section */}
            <div className="contact-form-container">
                <form ref={form} className="contact-form" onSubmit={sendEmail}> {/* Add ref and onSubmit */}
                    {/* Email ID Input */}
                    <input
                        type="email" // Change type to "email" for better validation
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input' />
                    {/* Email Body */}
                    <textarea
                        type="text"
                        placeholder='Your message'
                        name='message'
                        className='input-box body-input'>
                    </textarea>

                    {/* Submit Button */}
                    <button type='submit' className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social Icons */}
            <div className="social-icons-container">
                <a href="https://github.com/karthiksambhu103" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/kartik-sambhu-b94300270/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/kartiksambhu/" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://b-portfolio208.netlify.app/" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>

            <FooterLink phrase="Read more " link="about me." toAddress='/about' />

            <div className="vector-frame">
                <img src={contactVector} alt="contact" className="about-vector" />
            </div>
        </div>
    );
}

export default Contact;
