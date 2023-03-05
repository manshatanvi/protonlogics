import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import PageHeader from '../../components/common/PageHeader';
import FeatureTwo from '../../components/features';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const Services = () => {
  return (
    <Layout>
      <PageMeta title='Nixet - Services' />
      <Navbar classOption='navbar-light' />
      <PageHeader
        title='We are Development Experts'
        desc="From proof of concepts (PoC) and minimum viable products (MVP) to complex systems of an enterprise-level – we’ve got everything covered."
      />
      <FeatureTwo />
      <FooterOne footerDark />
    </Layout>
  );
};

export default Services;
