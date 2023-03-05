import React from 'react';
import PageMeta from '../components/common/PageMeta';
import PageHeader from '../components/common/PageHeader';
import Team from '../components/team/Team';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const About = () => {
  return (
    <Layout>
      <PageMeta title="Nixet - About Us" />
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Digital agency with solid design and development expertise"
        desc="From the moment our company was founded in 2021, we have helped our clients find exceptional solutions for their businesses, creating memorable brands and digital products."
      />
      <Team />
      <FooterOne footerDark />
    </Layout>
  );
};

export default About;
