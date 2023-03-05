import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import ContactsForm from './ContactsForm';

const ContactFormThree = () => {
  return (
    <>
      <section className='contact-us ptb-120 position-relative overflow-hidden'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-xl-5 col-lg-5 col-md-12'>
              <SectionTitle
                subtitle='Quick Support'
                title='Get in Touch Today!'
                description=' Proactively deliver seamless core competencies with
                    scalable. Completely fabricate transparent paradigms.'
              />
              <div className='row justify-content-between pb-5'>
                <div
                  className='col-sm-6 mb-4 mb-md-0 mb-lg-0'
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div className='icon-box d-inline-block rounded-circle bg-primary-soft'>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                  </div>
                  <div className='contact-info'>
                    <h5>Call Us</h5>
                    <p>
                      Questions about our product or pricing? Call for support
                    </p>
                    <a
                      href='tel:(415)231-59687'
                      className='read-more-link text-decoration-none'
                    >
                      <i className='far fa-phone me-2'></i> (415)231-59687
                    </a>
                  </div>
                </div>
                <div
                  className='col-sm-6'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='icon-box d-inline-block rounded-circle bg-danger-soft'>
                    <i className='fas fa-comment-alt-lines fa-2x text-danger'></i>
                  </div>
                  <div className='contact-info'>
                    <h5>Chat Us</h5>
                    <p>
                      Our support will help you from
                      <strong>9am to 5pm EST.</strong>
                    </p>
                    <Link
                      to='/contact-us'
                      className='read-more-link text-decoration-none'
                    >
                      <i className='far fa-comment-alt-dots me-2'></i> Live Chat
                      Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ContactsForm />
          </div>
        </div>
        <div
          className='bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5'
          style={{
            background:
              " url('img/shape/dot-dot-wave-shape.svg')no-repeat center top",
          }}
        >
          <div className='bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5'></div>
          <div className='bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5'></div>
        </div>
      </section>
    </>
  );
};
export default ContactFormThree;
