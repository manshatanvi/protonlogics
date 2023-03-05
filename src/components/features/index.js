import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureTwo = ({ cardDark }) => {
  return (
    <>
      <section
        className={`feature-section ptb-120 ${
          cardDark ? 'bg-dark' : 'bg-light'
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              {cardDark ? (
                <SectionTitle
                  subtitle="Services"
                  title="We Can Help You Visualize Even the Craziest Ideas"
                  description="With our approach and expertise combined, we help businesses to truly excel."
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle="Services"
                  title="We Can Help You Visualize Even the Craziest Ideas"
                  description="With our approach and expertise combined we help businesses to truly excel."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-grid">
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-primary-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-laptop-code icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Web Development</h3>
                    <p className="mb-0">
                      We help you create highly competent digital products ready to use.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Front-end Development
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Back-end Development
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        API Development
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Electron App Development
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-success-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-mobile icon-sm text-success"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Mobile Development</h3>
                    <p className="mb-0">
                      We help our clients in building highly scalable and secure
                      mobile apps.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Android Development
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        iOS Development
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Cross Platform (React Native)
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        API Development
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-danger-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-link icon-sm text-danger"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Blockchain</h3>
                    <p className="mb-0">
                      We help you to unleash the potential of blockchain to transform your industry.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Smart Contract
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        NFT Marketplace & Minting
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Trading Platform
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Solana Network
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-dark-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-infinity icon-sm text-dark"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">DevOps</h3>
                    <p className="mb-0">
                      We accelerate DevOps adoption, enabling engineering team
                      to focus on product.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Assessment and Planning
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Pilot Framework Creation
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Process Implementation
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        CI/CD Pipeline
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-warning-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-pencil-ruler icon-sm text-warning"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Product Design</h3>
                    <p className="mb-0">
                      We create meaningful experiences through design.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        UI Design
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        UX Design
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Prototyping
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Micro-interaction
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light cardHover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-info-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-satellite-dish icon-sm text-info"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Digital Marketing</h3>
                    <p className="mb-0">
                      We help you expand your business on digital platforms with ease.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Search Engine Optimization (SEO)
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Google Ads
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Social Media Advertising
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Reports & Insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
