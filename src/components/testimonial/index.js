import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { TestimonialData } from '../../data';
import SectionTitle from '../common/SectionTitle';

SwiperCore.use([Navigation]);

const TestimonialTwo = ({ dark, bgWhite }) => {
  const swiperOption = {
    slidesPerView: 1,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-nav-control .swiper-button-next',
      prevEl: '.swiper-nav-control .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <section
        className={`testimonial-section ${
          dark ? 'bg-dark' : 'bg-light'
        } ptb-120 ${bgWhite ? 'bg-white' : ''}`}
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              {dark ? (
                <SectionTitle
                  subtitle="Testimonial"
                  title="Don't just take our word for it"
                  description="Protonlogics has had the great pleasure of working with clients around the world. Here are some of the kind words our clients had to say about us."
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle="Testimonial"
                  title="Don't just take our word for it"
                  description="Protonlogics has had the great pleasure of working with clients around the world. Here are some of the kind word our clients had to say about us."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <Swiper {...swiperOption}>
                  {TestimonialData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <div
                        className={`p-5 rounded-custom position-relative ${
                          dark
                            ? 'bg-custom-light text-white'
                            : 'border border-2'
                        }   `}
                      >
                        <img
                          src="assets/img/testimonial/quotes-dot.svg"
                          alt="quotes"
                          width="100"
                          className="img-fluid position-absolute left-0 top-0 z--1 p-3"
                        />
                        <div className="d-flex mb-32 align-items-center">
                          <img
                            src={data.authorImg}
                            className="img-fluid me-3 rounded"
                            width="60"
                            alt="user"
                          />
                          <div className="author-info">
                            <h6 className="mb-0">{data.authorName}</h6>
                            <small>{data.authorTitle}</small>
                          </div>
                        </div>
                        <blockquote>
                          <h6>{data.quoteTitle}</h6>
                          {data.authorQuote}
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-nav-control">
                  <span className="swiper-button-next"></span>
                  <span className="swiper-button-prev"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;
