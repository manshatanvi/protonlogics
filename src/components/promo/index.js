import React from 'react';
import SectionTitle from '../common/SectionTitle';

const PromoThree = ({hasBg}) => {
  return (
    <>
      <section className={`promo-section ptb-120 ${hasBg?'bg-light':''}`}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-6'>
              <SectionTitle
                title='Everything We Do it With Love'
                description='We go beyond partnership to deliver true team synergy between your company and ours.'
                centerAlign
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div
                className='promo-card-wrap border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4'
                data-aos='fade-up'
                data-aos-delay='50'
              >
                <div className='promo-card-info'>
                  <h3 className='display-5 fw-medium mb-4'>10+</h3>
                  <h2 className='h5'>Completed Projects</h2>
                  <p className='mb-0'>
                    Product ideas brought to life digitally
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div
                className='promo-card-wrap border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='promo-card-info'>
                  <h3 className='display-5 fw-medium mb-4'>5+</h3>
                  <h2 className='h5'>Happy Clients</h2>
                  <p className='mb-0'>
                    Servicing both local & international clients
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div
                className='promo-card-wrap border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0'
                data-aos='fade-up'
                data-aos-delay='150'
              >
                <div className='promo-card-info'>
                  <h3 className='display-5 fw-medium mb-4'>100%</h3>
                  <h2 className='h5'>24/7 Support</h2>
                  <p className='mb-0'>
                  Always available for selfless service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoThree;
