import React from 'react';
import Slider from 'react-slick';
import '../styles/HeroSection.css'; // Import the CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  };

  return (
    <section className="hero-section">
      <Slider {...settings} className="slick-slideshow">
        <div className="slick-custom">
          <img src={`${process.env.PUBLIC_URL}/images/lagos/skyline.jpg`} className="img-fluid" alt="skyline" />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">Explore Lagos Like Never Before</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">Experience seamless navigation through the vibrant streets of Lagos with our advanced traffic prediction and route suggestion tool.</p>
                  <a href="/map" className="btn custom-btn">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-custom">
          <img src={`${process.env.PUBLIC_URL}/images/lagos/traffic_jams.jpeg`} className="img-fluid" alt="New Design" />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">Beat the Traffic Jams</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">Avoid delays and save time with real-time traffic updates and predictive analysis. Find the best routes to reach your destination faster.</p>
                  <a href="/about" className="btn custom-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-custom">
          <img src={`${process.env.PUBLIC_URL}/images/lagos/smart_routes.jpg`} className="img-fluid" alt="Talk to us" />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">Discover Smarter Routes</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">Say goodbye to traffic headaches. Use LagosFlow to find less crowded, faster routes and enjoy a smoother commute.</p>
                  <a href="/map" className="btn custom-btn">Try it Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
