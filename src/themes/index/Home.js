import React from 'react';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Hero from './Hero';
import FeatureTwo from '../../components/features';
import PromoThree from '../../components/promo';
import WorkProcessFour from '../../components/work-process';
import IntegrationOne from '../../components/integration';
import Customer from '../../components/customer/Customer';
import TestimonialTwo from '../../components/testimonial';

const Home = () => {
  return (
    <Layout>
      <PageMeta title='Protonlogics - Where Quality Matters' />
      <Navbar />
      <Hero />
      <FeatureTwo />
      <WorkProcessFour />
      <IntegrationOne />
      <PromoThree />
      <Customer />
      <TestimonialTwo />
      <FooterOne footerDark />
    </Layout>
  );
};

export default Home;
