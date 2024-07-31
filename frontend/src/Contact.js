import React from 'react';
import './styles/about.css'; // Make sure to include any necessary CSS

const Contact = () => {
  return (
    <div>
      <section className="pb_sm_py_cover text-center cover-bg-black cover-bg-opacity-4 moon" style={{ backgroundImage: 'url(assets/images/1900x1200_img_3.jpg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="heading mb-3">Contact US</h2>
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
                  <p>LagosFlow Headquarters
                    123 Main Street, Victoria Island
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
          <div className="row justify-content-md-center text-center">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top font-weight-normal">Get In Touch</h2>
              <p>Our team is here to assist you and ensure you have the best experience using LagosFlow.</p>
            </div>
          </div>

          <div className="row mt-0" id="row-contact">
            <div className="col-md-12 pr-md-5 pr-sm-0 mb-3 mt-0">
              <form action="#">
                <div className="row mt-0">
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control p-3 rounded-0" id="name" />
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control p-3 rounded-0" id="email" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea cols="30" rows="10" className="form-control p-3 rounded-0" id="message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn pb_outline-dark pb_font-13 pb_letter-spacing-2 p-3 rounded-0" value="Send Message" />
                </div>
              </form>
            </div>
            {/* <div className="col-md-4">
              <ul className="pb_contact_details_v1">
                <li>
                  <span className="text-uppercase">Email</span>
                  <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8dfdffe2efe2e2f9fef9ffecfdcdeae0ece4e1a3eee2e0">[email&#160;protected]</a>
                </li>
                <li>
                  <span className="text-uppercase">Phone</span>
                  +30 976 1382 9921
                </li>
                <li>
                  <span className="text-uppercase">Fax</span>
                  +30 976 1382 9922
                </li>
                <li>
                  <span className="text-uppercase">Address</span>
                  San Francisco, CA <br />
                  4th Floor8 Lower <br />
                  San Francisco street, M1 50F
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      {/* END section */}
    </div>
  );
};

export default Contact;
