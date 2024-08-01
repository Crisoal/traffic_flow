// src/components/FAQ.js
import React from 'react';
import './styles/about.css';

const FAQ = () => {
  return (
    <section className="bsb-faq-3 py-3 py-md-5 py-xl-8" id='faq-accordion'>
      <div className="container">
        <div className="row justify-content-md-center pb-0" id='faq-header'>
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h4 className="mb-4 display-5 text-center">Frequently Asked Questions</h4>
            <p className="mb-5 text-center">Welcome to the LagosFlow FAQ section! Here, we provide answers to common questions about our traffic congestion prediction and alternative route suggestion services.</p>
            <hr className="w-50 mx-auto mb-3 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

     
      <div className="mb-8">
  <div className="container">
    <div className="row justify-content-center pt-0 pb-0">
      <div className="col-11 col-xl-10 p-0">
        <div className="d-flex align-items-end mb-2">
          <i className="bi bi-info-circle me-3 lh-1 display-5 icon-small"></i> {/* General Icon */}
          <h5 className="m-0">General Questions</h5>
        </div>
      </div>
      <div className="col-11 col-xl-10 p-0">
        <div className="accordion accordion-flush" id="faqAccount">
          {/* FAQ Items */}

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              What is LagosFlow?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>LagosFlow is a comprehensive traffic congestion prediction and alternative route suggestion platform focused on Lagos, Nigeria. We provide real-time traffic updates, traffic forecasts for various time intervals, and alternative routes to help you navigate the city efficiently.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              How does LagosFlow predict traffic congestion?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>LagosFlow uses real-time traffic data from TomTom, historical traffic data, and weather information to predict traffic congestion. We employ advanced machine learning models to forecast traffic conditions for 15 minutes, 30 minutes, 45 minutes, 1 hour, 2 hours, and 3 hours intervals.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              Which areas does LagosFlow cover?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>LagosFlow covers the entire city of Lagos, Nigeria. Our platform provides traffic information and forecasts for all roads and areas within Lagos.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              How do I use LagosFlow to find current traffic conditions?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>Simply use the search bar on the homepage to search for a specific area or road in Lagos. LagosFlow will display current traffic conditions, congestion levels, and other relevant information.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              How can I get traffic forecasts for specific intervals?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>After searching for a location, use the forecast dropdown menu to select the desired time interval (e.g., 15 minutes, 30 minutes). LagosFlow will display the predicted traffic conditions for that interval.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqAccountHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
              How do I find alternative routes to avoid congestion?
              </button>
            </h2>
            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
              <div className="accordion-body">
                <p>When you search for a location and traffic congestion is detected, LagosFlow will automatically suggest alternative routes. These routes are displayed on the map, helping you to navigate through less congested paths.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <div className="container">
    <div className="row justify-content-center pt-0 pb-0">
      <div className="col-11 col-xl-10 p-0">
        <div className="d-flex align-items-end mb-2">
          <i className="bi bi-tools me-3 lh-1 display-5 icon-small"></i> {/* Technical Icon */}
          <h5 className="m-0">Technical Questions</h5>
        </div>
      </div>
      <div className="col-11 col-xl-10 p-0">
        <div className="accordion accordion-flush" id="faqOrder">
          {/* FAQ Items */}
          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqOrderHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse1" aria-expanded="false" aria-controls="faqOrderCollapse1">
              What data sources does LagosFlow use?
              </button>
            </h2>
            <div id="faqOrderCollapse1" className="accordion-collapse collapse" aria-labelledby="faqOrderHeading1">
              <div className="accordion-body">
                <p>LagosFlow integrates data from TomTom for real-time traffic updates, OpenWeatherMap for real-time weather data, and OpenStreetMap for geographic information. We also use our own collected historical traffic data to enhance prediction accuracy.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqOrderHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse1" aria-expanded="false" aria-controls="faqOrderCollapse1">
              How often is the traffic data updated?
              </button>
            </h2>
            <div id="faqOrderCollapse1" className="accordion-collapse collapse" aria-labelledby="faqOrderHeading1">
              <div className="accordion-body">
                <p>Traffic data is updated every 15 minutes to ensure that users have access to the most current information available.</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mb-0">
  <div className="container">
    <div className="row justify-content-center pt-0 pb-0">
      <div className="col-11 col-xl-10 p-0">
        <div className="d-flex align-items-end mb-2">
          <i className="bi bi-headset me-3 lh-1 display-5 icon-small"></i> {/* Support/Contact Icon */}
          <h5 className="m-0">Support and Contact</h5>
        </div>
      </div>
      <div className="col-11 col-xl-10 p-0">
        <div className="accordion accordion-flush" id="faqRefund">
          {/* FAQ Items */}
          <div className="accordion-item bg-transparent border-top border-bottom py-3">
            <h2 className="accordion-header p-0" id="faqRefundHeading1">
              <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse1" aria-expanded="false" aria-controls="faqRefundCollapse1">
              How can I contact LagosFlow for support?
              </button>
            </h2>
            <div id="faqRefundCollapse1" className="accordion-collapse collapse" aria-labelledby="faqRefundHeading1">
              <div className="accordion-body">
                <p>If you need assistance or have any questions, please reach out to us through the contact form on our website or email us at support@lagosflow.com.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default FAQ;
