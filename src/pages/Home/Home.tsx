import React from 'react';

import AppContainer from 'components/appContainer';
import Header from 'components/header';
import Footer from 'components/footer';
import HiringProcess from 'pages/Home/components/hiringProcess';
import PsychometricTest from './components/psychometricTest';
import LandingScreen from './components/landingScreen';

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <LandingScreen />
      <HiringProcess />
      <PsychometricTest />
      <Footer />
    </AppContainer>
  );
};

export default Home;
