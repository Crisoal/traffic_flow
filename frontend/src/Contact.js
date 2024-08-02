import React, { useState } from 'react';
import './styles/about.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setMessageType('');

    // Client-side validation
    if (!name || !email || !message) {
      setResponseMessage('All fields are required.');
      setMessageType('error');
      return;
    }
    if (!validateEmail(email)) {
      setResponseMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    // Sanitize inputs (basic example, should be improved for more security)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Message sent successfully. We will get back to you within 2 business days.');
        setMessageType('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(data.error || 'An error occurred while sending your message.');
        setMessageType('error');
      }
    } catch (error) {
      setResponseMessage('An unexpected error occurred.');
      setMessageType('error');
    }
  };

  return (
    <div>
      <section className="pb_sm_py_cover text-center cover-bg-black cover-bg-opacity-4 moon" style={{ backgroundImage: 'url(assets/images/1900x1200_img_3.jpg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="heading mb-3" id="contact">Contact US</h2>
              <p className="sub-heading mb-2 pb_color-light-opacity-8">We’d love to hear from you! For any questions or feedback, please reach out to us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb_section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center mb-3">
                <div className="icon border border-gray rounded-circle d-block mr-3 display-4 mx-auto mb-4">
                  <i className="flaticon text-secondary flaticon-jury"></i>
                </div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Address:</h3>
                  <p>LagosFlow Headquarters<br />
                    123 Main Street, Victoria Island<br />
                    Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center mb-3">
                <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 mx-auto mb-4">
                  <i className="flaticon text-secondary flaticon-law"></i>
                </div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Phone Number:</h3>
                  <p>+234 0890 4567</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center mb-3">
                <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 mx-auto mb-4">
                  <i className="flaticon text-secondary flaticon-courthouse"></i>
                </div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Email Address:</h3>
                  <p>contact@lagosflow.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb_section" data-section="contact" id="section-contact">
        <div className="container">
          <div className="row justify-content-md-center text-center pb-0">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top font-weight-normal">Get In Touch</h2>
              <p>Our team is here to assist you and ensure you have the best experience using LagosFlow.</p>
            </div>
          </div>

          <div className="row mt-0 pt-0" id="row-contact">
            <div className="col-md-12 pr-md-5 pr-sm-0 mb-3 mt-0">
              <form onSubmit={handleSubmit}>
                <div className="row mt-0">
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        className="form-control p-3 rounded-0" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        className="form-control p-3 rounded-0" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group p-3 pt-0 pb-0">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    cols="30" 
                    rows="10" 
                    className="form-control p-3 rounded-0" 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                  ></textarea>
                </div>
                <div className="form-group">
                  <input 
                    type="submit" 
                    className="btn pb_outline-dark pb_font-13 pb_letter-spacing-2 p-3 rounded-0" 
                    value="Send Message" 
                  />
                </div>
                {responseMessage && (
                  <div className={`response-message ${messageType}`}>
                    {responseMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <style>
        {`
          .response-message.success {
            color: green;
          }
          .response-message.error {
            color: red;
          }
          .form-group input, .form-group textarea {
            border-radius: 0;
          }
          .btn {
            background-color: darkolivegreen;
            border: none;
            color: white;
          }
          .btn:hover {
            background-color: olive;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
