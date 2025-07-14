import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We’ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Let’s Talk</h2>
          <p>
            Have a question, feedback, or looking to list your property? Fill out the form and our team will respond promptly.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> hello@staynest.com</p>
            <p><strong>Phone:</strong> +256 700 123 456</p>
            <p><strong>Office:</strong> Kampala, Uganda</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;