import React from "react";

import s from './styles.module.scss';

import ReasonsToWorkWithUs from "../../components/ReasonsToWorkWithUs/ReasonsToWorkWithUs";
import OurServices from "../../components/OurServices/OurServices";
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';

export const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ReasonsToWorkWithUs />
      <OurServices />
    </>
  )
}
export default MainPage;