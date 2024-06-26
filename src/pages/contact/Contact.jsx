import React, { useState } from 'react';
//import emailjs from 'emailjs-com';
//npm install emailjs-com
import './Contact.css';
import NavBar from '../../components/NavBar/NavBar';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Construct params object for EmailJS
        const params = {
            name,
            email,
            message
        };

        // Example of how to use params with EmailJS
        emailjs.send('service_ouyapun', 'template_0iq1h1n', params, 'user_RvRZJ8_KLtjGvgQgy')
            .then((response) => {
                console.log('Email sent!', response);
                alert('Your message has been sent successfully!');
                // Clear the form fields after successful submission
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.error('Error sending email:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    };

    return (
        <>
            <NavBar />
            <main className="contact">
                <h1>Contact Us</h1>
                <section className="contact-info">
                    <p>Email: <a href="mailto:restorationtourgroup@gmail.com">restorationtourgroup@gmail.com</a></p>
                    <p>Phone: <a href="tel:4407961642">440-796-1642</a></p>
                </section>
                <section className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <button type="submit" id="sendMessageButton">Send Message</button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Contact;
