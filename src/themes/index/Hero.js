import React from 'react';
import HeroTitle from '../../components/common/HeroTitle';

const HeroTwo = () => {
  return (
    <>
      <section
        className="hero-section ptb-120 position-relative overflow-hidden"
        style={{
          background:
            "url('assets/img/shape/color-particles-2.svg') no-repeat center top",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-10 mb-5">
              <div className="hero-content-wrap">
                <HeroTitle
                  title="We are crafting the future generation of businesses and startups"
                  desc="Join our journey today and take your business to the next level"
                />
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ul className="position-absolute animate-element parallax-element widget-img-wrap z-2">
                  <li className="layer" data-depth="0.04">
                    <img
                      src="assets/img/screen/widget-3.svg"
                      alt="widget-img"
                      className="img-fluid widget-img-1 position-absolute shadow-lg rounded-custom"/>
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="assets/img/screen/widget-4.svg"
                      alt="widget-img"
                      className="img-fluid widget-img-3 position-absolute shadow-lg rounded-custom"
                    />
                  </li>
                </ul>
                <img
                  src="assets/img/screen/dashboard-light.svg"
                  alt="dashboard"
                  className="img-fluid position-relative rounded-custom box-shadow mt-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark position-absolute bottom-0 h-25 bottom-0 eft-0 right-0 z--1 py-5"></div>
      </section>
    </>
  );
};

export default HeroTwo;
