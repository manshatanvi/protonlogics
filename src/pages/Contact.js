import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import ContactBox from '../components/contact/ContactBox';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="Nixet - Contact Us" />
      <Navbar />
      <PageHeader
        title="Contact Us"
        desc="We help our clients to reach their goal of creating a digital product. If you’d like to learn more about how we can help your business, send us a message with a brief description of your project. Someone from our team will get back to you."
      />
      <ContactBox />
      <FooterOne
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default Contact;
