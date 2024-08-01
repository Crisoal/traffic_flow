// src/components/FAQ.js
import React from 'react';
import './styles/about.css';

const FAQ = () => {
  return (
    <section className="bsb-faq-3 py-3 py-md-5 py-xl-8" id='faq-accordion'>
      <div className="container">
        <div className="row justify-content-md-center pb-0">
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
                <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                <h5 className="m-0">Your Account</h5>
              </div>
            </div>
            <div className="col-11 col-xl-10 p-0">
              <div className="accordion accordion-flush" id="faqAccount">
                {/* FAQ Items */}
                <div className="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 className="accordion-header p-0" id="faqAccountHeading1">
                    <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
                      What is an account?
                    </button>
                  </h2>
                  <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
                    <div className="accordion-body">
                      <p>An account is a personal or organizational record that allows you to access and manage various services, often requiring authentication through a username and password.</p>
                    </div>
                  </div>
                </div>
                {/* Repeat accordion items for other FAQs */}
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
                <i className="bi bi-cart-plus me-3 lh-1 display-5"></i>
                <h5 className="m-0">Placing an Order</h5>
              </div>
            </div>
            <div className="col-11 col-xl-10 p-0">
              <div className="accordion accordion-flush" id="faqOrder">
                {/* FAQ Items */}
                <div className="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 className="accordion-header p-0" id="faqOrderHeading1">
                    <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse1" aria-expanded="false" aria-controls="faqOrderCollapse1">
                      Do I need to create an account to place an order?
                    </button>
                  </h2>
                  <div id="faqOrderCollapse1" className="accordion-collapse collapse" aria-labelledby="faqOrderHeading1">
                    <div className="accordion-body">
                      <p>You can order as a guest if you create an account. However, creating an account allows for faster checkout and order tracking.</p>
                    </div>
                  </div>
                </div>
                {/* Repeat accordion items for other FAQs */}
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
                <i className="bi bi-bag-dash me-3 lh-1 display-5"></i>
                <h5 className="m-0">Refunds and Exchanges</h5>
              </div>
            </div>
            <div className="col-11 col-xl-10 p-0">
              <div className="accordion accordion-flush" id="faqRefund">
                {/* FAQ Items */}
                <div className="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 className="accordion-header p-0" id="faqRefundHeading1">
                    <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse1" aria-expanded="false" aria-controls="faqRefundCollapse1">
                      How do I request a refund or exchange?
                    </button>
                  </h2>
                  <div id="faqRefundCollapse1" className="accordion-collapse collapse" aria-labelledby="faqRefundHeading1">
                    <div className="accordion-body">
                      <p>To request a refund or exchange, please follow these steps:</p>
                      <ul>
                        <li>Contact our customer support team within 30 days of the purchase.</li>
                        <li>Provide your order number and a detailed reason for the request.</li>
                        <li>Wait for our customer support team to assess your request and provide further instructions.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Repeat accordion items for other FAQs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
