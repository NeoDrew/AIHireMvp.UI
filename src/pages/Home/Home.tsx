import React from 'react';

import AppContainer from 'components/appContainer';
import Header from 'components/header';
import Footer from 'components/footer';
import TutoringProcessSection from 'pages/Home/components/tutoringProcessSelection';
import PsychometricTest from './components/psychometricTest';
import LandingScreen from './components/landingScreen';

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <LandingScreen />
      <TutoringProcessSection />
      <PsychometricTest />
      <Footer />
    </AppContainer>
  );
};

export default Home;
