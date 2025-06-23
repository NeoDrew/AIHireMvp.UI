import React from 'react';

import AppContainer from 'components/appContainer';
import Header from 'components/header';
import Footer from 'components/footer';
import HiringProcess from './components/hiringProcess';
import LandingScreen from './components/landingScreen';
import CostComparison from './components/costComparison';

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <LandingScreen />
      <HiringProcess />
      <CostComparison />
      <Footer />
    </AppContainer>
  );
};

export default Home;
