import React from 'react';
import './styles/about.css';

const About = () => {
  return (
    <div>
      <section className="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/areas/lagos_island.jpg)` }} id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6 order-md-1">
              <h2 className="heading mb-3" id='content-white'>About US</h2>
              <div className="sub-heading">
                {/* <p className="mb-5">A free template by ProBootstrap.com for Law Firm</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}

      <section className="pb_section pb_section_v1" data-section="about" id="section-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-md-5 pr-sm-0">
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">Who We Are</h2>
              <div>
      <p className="gray-text">
        Navigating the bustling streets of Lagos has never been easier with LagosFlow. Our platform is dedicated to providing you with real-time traffic updates and alternative route suggestions to ensure a smooth and efficient journey. Whether you're commuting to work, running errands, or exploring the city, LagosFlow helps you avoid traffic jams and save valuable time.
      </p>
      <p className="gray-text">
        At LagosFlow, we are committed to enhancing your travel experience in Lagos. Join us as we strive to make every journey faster and stress-free.
      </p>
    </div>
            </div>
            <div className="col-lg-7">
              <div className="images">
                <img className="img1 img-fluid" src={`${process.env.PUBLIC_URL}/images/lagos/Dy_o0k8WoAgBbxe.jpg`} alt="free Template by ProBootstrap.com" />
                <img className="img2" src={`${process.env.PUBLIC_URL}/images/lagos/lagos+skyline.jpg`} alt="free Template by ProBootstrap.com" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}

      <section className="pb_section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center mb-3">
                <div className="icon border border-gray rounded-circle d-block mr-3 display-4 mx-auto mb-4"><i className="flaticon text-secondary flaticon-jury"></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Advanced Traffic Predictions</h3>
                  <p>Plan your journey better with forecasts for traffic conditions at intervals of 15 minutes, 30 minutes, 45 minutes, 1 hour, 2 hours, and 3 hours. Make informed decisions and avoid delays.</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center  mb-3">
                <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 mx-auto mb-4"><i className="flaticon text-secondary flaticon-law"></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Interactive 3D Map</h3>
                  <p>Explore Lagos like never before with our interactive Mapbox 3D map. View congested areas, search for specific roads, and see detailed traffic forecasts and alternative routes.</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media pb_media_v2 d-block text-center  mb-3">
                <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 mx-auto mb-4"><i className="flaticon text-secondary flaticon-courthouse"></i></div>
                <div className="media-body">
                  <h3 className="mt-0 pb_font-20">Smart Route Suggestions:</h3>
                  <p>Get optimized routes based on current traffic conditions and forecasts. Our platform helps you find the fastest and most efficient paths to your destination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}

      <section className="pb_section" data-section="why-us" id="section-why-us">
        <div className="container">
          <div className="row justify-content-md-center text-center mb-5">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top font-weight-normal">Why Us</h2>
              <p>We provide real-time traffic updates, accurate congestion predictions, and interactive maps tailored to the city's unique traffic challenges. Our platform uses advanced machine learning and live data to help you avoid delays and find the best routes. Trust LagosFlow for a smoother, more predictable travel experience in Lagos.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="images right">
                <img className="img1 img-fluid" src={`${process.env.PUBLIC_URL}/images/areas/SOTA-KINGSWAY-TOWER-LAGOS-NIGERIA.jpg`} alt="free Template by ProBootstrap.com" />
                <img className="img2" src={`${process.env.PUBLIC_URL}/images/areas/victoria_island.jpg`} alt="free Template by ProBootstrap.com" />
              </div>
            </div>
            {/* <div className="col-lg-5 pl-md-5 pl-sm-0">
              <div id="exampleAccordion" className="pb_accordion" data-children=".item">
                <div className="item">
                  <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1" className="pb_font-18">Property &amp; Business Law</a>
                  <div id="exampleAccordion1" className="collapse show" role="tabpanel">
                    <p>Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
                <div className="item">
                  <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" aria-expanded="false" aria-controls="exampleAccordion2" className="pb_font-18">Family Law</a>
                  <div id="exampleAccordion2" className="collapse" role="tabpanel">
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
                <div className="item">
                  <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion3" aria-expanded="false" aria-controls="exampleAccordion3" className="pb_font-18">Commercial Litigation</a>
                  <div id="exampleAccordion3" className="collapse" role="tabpanel">
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  </div>
                </div>
                <div className="item">
                  <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion4" aria-expanded="false" aria-controls="exampleAccordion4" className="pb_font-18">Injury Compensation</a>
                  <div id="exampleAccordion4" className="collapse" role="tabpanel">
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* END section */}

      <section className="pb_section pb_bg-half" data-section="practicing-areas" id="section-practicing-areas">
        <div className="container">
          <div className="row justify-content-md-center text-center mb-5">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top font-weight-normal">Author</h2>
              <p>Christiana Ola is the visionary behind LagosFlow. As a final year computing student, Christiana is passionate about technology and its potential to solve real-world problems. With a keen interest in machine learning and cybersecurity, she has developed LagosFlow to help commuters navigate the complex traffic patterns of Lagos efficiently. Christiana's dedication to innovation and her expertise as a developer ensure that LagosFlow remains a reliable and advanced tool for all users.</p>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-md-12">
              <div className="single-item pb_slide_v2">
                <div>
                  <div className="d-lg-flex d-md-block slide_content">
                    <div className="pb_content-media" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Crisoal - Copy.jpeg)` }}></div>
                    <div className="slide_content-text text-center">
                      <div className="pb_icon_v1"><i className="flaticon text-primary flaticon-handcuffs"></i></div>
                      <h3 className="font-weight-normal mt-0 mb-4">Criminal Law</h3>
                      <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div> */}
        </div>  
      </section>
      
    </div>
  );
}

export default About;
