import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Subscription successful');
        setMessageType('success');
      } else {
        setMessage(data.error);
        setMessageType('error');
      }
    } catch (error) {
      setMessage('An unexpected error occurred');
      setMessageType('error');
    }
  };

  return (
    <footer>
      <div className="footer-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4 footer-info">
              <div className="footer-logo mb-3">
                <img src={`${process.env.PUBLIC_URL}/images/lagos-flow.png`} alt="logo" height={40} />
              </div>
              <p>
                LagosFlow provides real-time traffic updates and alternative routes to help you navigate Lagos efficiently.
              </p>
              <p>© 2024 LagosFlow. All rights reserved.</p>

              <ul className="list-inline footer-social-list">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/cris.oal.1/"><FaFacebookSquare /></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://x.com/cris_oal"><FaTwitter /></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/chrisoluwabunmi/"><FaInstagram /></a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 footer-contact">
              <h4>Contact</h4>
              <p>
                12 Victoria Island<br />
                Lagos<br />
                100251, Nigeria<br />
              </p>
              <p>
                {/* <a href="mailto:[email&#160;protected]">[email&#160;protected]</a><br /> */}
                Phone: (+234) 678 97823<br />
                Fax: (+234) 789 034590
              </p>
            </div>

            <div className="col-md-2 col-sm-6 mb-4 footer-site-links">
              <h4>Site Links</h4>
              <ul className="list-unstyled">
                <li><a href="/home" target='blank'>Home</a></li>
                <li><a href="/map" target='blank'>Map</a></li>
                <li><a href="/about" target='blank'>About</a></li>
                <li><a href="/contact" target='blank'>Contact</a></li>
                {/* <li><a href="/faq" target='blank'>FAQ</a></li> */}
              </ul>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 footer-subscribe">
              <h4>Our Newsletter</h4>
              <p>Join our newsletter for the latest insights and alerts.</p>
              <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate="true" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="EMAIL"
                    className="form-control mb-2"
                    id="mc-email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="submit"
                    name="subscribe"
                    value="Send"
                    className="btn btn-primary footer-btn"
                  />
                  {message && (
                    <div className={`subscribe-message ${messageType}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .footer-btn {
            background-color: darkolivegreen;
            border: none;
          }
          .footer-btn:hover {
            background-color: darkolivegreen;
          }
          
          .footer-main{
          background-color: #000000f7;
          }
          
          footer .footer-main h4, footer .footer-main p{
            color: #ccc;
          }
          
          .subscribe-message.success {
            color: green;
          }
          
          .subscribe-message.error {
            color: red;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
