import React from 'react';

const ContactBox = () => {
  return (
    <>
      <section className='contact-promo ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-comment-alt-lines fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Chat with us</h5>
                  <p>We've got experts waiting to help you{' '}
                    <strong>Monday to Friday</strong> from
                    <strong>10am to 6pm IST.</strong>
                  </p>
                </div>
                <a
                  href='https://api.whatsapp.com/send/?phone=916363042267&text&app_absent=0'
                  className='btn btn-link mt-auto'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-envelope fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Email Us</h5>
                  <p>Drop us an email at{' '}
                    <strong>support@nixet.tech</strong>{' '}and you'll receive a reply within 24 hours
                  </p>
                </div>
                <a
                  href='mailto:support@nixet.tech'
                  className='btn btn-primary mt-auto'
                  target="_blank" rel="noreferrer"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-phone fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Give us a call</h5>
                  <p>Give us a ring. Our experts are standing by{' '}
                    <strong>monday to friday</strong> from
                    <strong>10am to 6pm IST.</strong>
                  </p>
                </div>
                <a href='tel:+91 636 304 2267' className='btn btn-link mt-auto'>
                  +91 636 304 2267
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
