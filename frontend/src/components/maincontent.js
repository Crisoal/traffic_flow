import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import '../styles/maincontent.css';
import mapImage from '../assets/img/map.png';

// Portfolio Items
const portfolioItems = [
    {
        src: `${process.env.PUBLIC_URL}/images/areas/Lekki-Epe-expressway.jpg`,
        title: "Lekki Expressway",
        description: "Avoid Traffic Jams",
        filter: "app",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/SOTA-KINGSWAY-TOWER-LAGOS-NIGERIA.jpg`,
        title: "Yaba",
        description: "Plan Your Route Effectively",
        filter: "branding",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/Ikeja_Mall03.jpg`,
        title: "Ikeja",
        description: "Save Time on Your Commute",
        filter: "product",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/victoria_island.jpg`,
        title: "Victoria Island",
        description: "Navigate Busy Streets",
        filter: "branding",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/surulere.jpeg`,
        title: "Surulere",
        description: "Smooth Your Drive",
        filter: "app",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/Apapa-Port.jpg`,
        title: "Apapa",
        description: "Streamline Port Access",
        filter: "product",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/lagos_island.jpg`,
        title: "Lagos Island",
        description: "Navigate Island Roads",
        filter: "app",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/magodo.jpg`,
        title: "Magodo",
        description: "Enhance Your Journey",
        filter: "product",
        detailsLink: "portfolio-details.html",
    },
    {
        src: `${process.env.PUBLIC_URL}/images/areas/badagry.jpg`,
        title: "Badagry",
        description: "Avoid Delays",
        filter: "branding",
        detailsLink: "portfolio-details.html",
    }
];


const PortfolioItem = ({ src, title, description, detailsLink }) => (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <img src={src} className="img-fluid" alt="" />
        <div className="portfolio-info">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={src} title={title} data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
            </a>
            <a href={detailsLink} title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
            </a>
        </div>
    </div>
);

const MainContent = () => {
    useEffect(() => {
        GLightbox({
            selector: '.glightbox'
        });
    }, []);

    return (
        <div>
            <main id="content">
                <section id="about" className="introduction scrollto">
                    <div className="row clearfix">
                        <div className="col-3">
                            <div className="section-heading">
                                <h3>SUCCESS</h3>
                                <h2 className="section-title">Transforming Lagos Commutes with Advanced Traffic Solutions</h2>
                                <p className="section-subtitle">
                                    At LagosFlow, we aim to revolutionize how people navigate through Lagos by providing accurate, real-time, and predictive traffic information. Our goal is to reduce congestion, enhance commuter experiences, and improve the city's transportation system.
                                </p>
                            </div>
                        </div>
                        <div className="col-2-3">
                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/icons8-traffic-100.png`} className="main-icon" alt="main-content-icon" />
                                </div>
                                <div className="icon-block-description">
                                    <h4>Real-Time Traffic Updates</h4>
                                    <p>
                                        Get live traffic updates for Lagos through our platform, offering instant insights into current road conditions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/icons8-line-chart-64.png`} className="main-icon" alt="main-content-icon" />
                                </div>
                                <div className="icon-block-description">
                                    <h4>Predictive Traffic Analysis</h4>
                                    <p>
                                        LagosFlow advanced predictive models estimate traffic congestion for the next 15 minutes to 3 hours, helping you plan your journey ahead.
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/icons8-world-map-96.png`} className="main-icon" alt="main-content-icon" />
                                </div>
                                <div className="icon-block-description">
                                    <h4>Interactive Map</h4>
                                    <p>
                                        Navigate easily with LagosFlow Interactive Map powered by Mapbox, showing congested zones, allowing searches for specific roads, and displaying traffic forecasts.
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/icons8-highway-arrows-96.png`} className="main-icon" alt="main-content-icon" />
                                </div>
                                <div className="icon-block-description">
                                    <h4>Alternative Route Suggestions</h4>
                                    <p>
                                        Benefit from smart route recommendations based on both current and expected traffic, guiding you away from jams and towards efficient paths to your destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="portfolio section">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            {portfolioItems.map((item, index) => (
                                <PortfolioItem
                                    key={index}
                                    src={item.src}
                                    title={item.title}
                                    description={item.description}
                                    detailsLink={item.detailsLink}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                {/* End Portfolio Section */}
            </main>

            <div id="services" className="scrollto clearfix">
                <div className="row no-padding-bottom clearfix">
                    {/* Content Left Side */}
                    <div className="col-3">
                        <blockquote className="testimonial text-right bigtest">
                            <q>LagosFlow has revolutionized my commute. With real-time updates and accurate traffic forecasts, I avoid congestion and find the quickest routes effortlessly. The 3D map is incredibly useful. It’s a game-changer for navigating Lagos!</q>
                            <footer>— Adeola M., Daily Commuter</footer>
                        </blockquote>
                    </div>
                    {/* End Content Left Side */}

                    {/* Content Right Side */}
                    <div className="col-3">
                        <div className="section-heading">
                            <h3>BELIEVING</h3>
                            <h2 className="section-title">Your Ultimate Traffic Companion</h2>
                            <p className="section-subtitle">LagosFlow is your go-to solution for navigating the bustling streets of Lagos with ease. Our cutting-edge platform provides real-time traffic predictions and alternative route suggestions to help you save time and avoid congestion.</p>
                        </div>
                        <p> 
                            At LagosFlow, we understand the challenges of navigating one of Africa’s most dynamic cities. Our mission is to make your commuting experience smoother and stress-free. Whether you're a daily commuter or just visiting, LagosFlow empowers you with the tools you need to stay ahead of the traffic and reach your destination on time.</p>
                        <p>Join the LagosFlow community today and experience a new level of convenience in urban travel.</p>
                    </div>
                    {/* End Content Right Side */}

                    <div className="col-3">
                        <img src={`${process.env.PUBLIC_URL}/images/excited-nigerian-.jpg`} alt="Dancer" />
                    </div>
                </div>
            </div>

            {/* Call To Action Section */}
            <section id="call-to-action" className="call-to-action section dark-background">
                <img src={mapImage} alt="Map" />

                <div className="container">
                    <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-xl-10">
                            <div className="text-center">
                                <h3>Explore the Map</h3>
                                <p>Ready to navigate Lagos with ease? Dive into our interactive map to view current traffic conditions and explore predictive traffic forecasts</p>
                                <a className="cta-btn" target='_blank' href="/map">Start Exploring</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Call To Action Section */}
        </div>
    );
};

export default MainContent;
