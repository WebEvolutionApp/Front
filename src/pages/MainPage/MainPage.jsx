import React from "react";

import s from './styles.module.scss';

import ReasonsToWorkWithUs from "../../components/ReasonsToWorkWithUs/ReasonsToWorkWithUs";
import OurServices from "../../components/OurServices/OurServices";
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import OurTeam from "../../components/OurTeam/OurTeam";

export const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ReasonsToWorkWithUs />
      <OurServices />
      <OurTeam />
      <Form />
      <Footer />
    </>
  )
}
export default MainPage;