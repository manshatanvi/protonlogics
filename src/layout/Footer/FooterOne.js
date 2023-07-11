import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../components/image/image';

const FooterOne = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ${footerLight ? 'footer-light' : 'bg-dark'} ${
            footerGradient ? 'bg-gradient' : ''
          }  text-white ptb-120`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <Image
                      src="assets/img/logoText-Light.svg"
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                    <Image
                      src="assets/img/logoText-Dark.svg"
                      alt="logo"
                      className="img-fluid logo-color"
                    />
                  </div>
                  <p className="address-text fw-bolder">
                    1st Floor, Gopala Krishna Complex,
                  </p>
                  <p className="address-text fw-bolder">
                    #45/3 Residency Road, Bangalore,
                  </p>
                  <p className="address-text fw-bolder">
                    Karnataka, India (560025)
                  </p>
                  <p className="address-contact fw-bolder">
                    <i className="far fa-envelope me-3"></i>info@nixet.tech
                  </p>
                  <p className="address-contact fw-bolder">
                    <i className="far fa-phone me-3"></i>(+91) 636 304 2267
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Company</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link to="/" className="text-decoration-none">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="text-decoration-none">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/about-us" className="text-decoration-none">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact-us"
                            className="text-decoration-none"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Connect With Us</h3>
                      <ul className="list-unstyled list-inline footer-social-list mb-0">
                        <li className="social__item">
                          <a href="https://www.linkedin.com/company/nixet" className="social__link" target='_blank' rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                id="circle"
                                cx="24"
                                cy="24"
                                r="24"
                                fill="#2776ec"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="social__item">
                          <a href="https://angel.co/company/nixet" className="social__link" target='_blank' rel="noreferrer">
                            <i className="fab fa-angellist"></i>
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                id="square"
                                width="48"
                                height="48"
                                fill="#2776ec"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="social__item">
                          <a href="https://twitter.com/nixetofficial" className="social__link" target='_blank' rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                            <svg
                              width="56"
                              height="48"
                              viewBox="0 0 56 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                id="triangle"
                                d="M27.7128 0L55.4256 48H0L27.7128 0Z"
                                fill="#2776ec"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? 'footer-light' : 'bg-dark'
          } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2022 Protonlogics Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
