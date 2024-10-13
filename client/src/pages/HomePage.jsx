import React from 'react';
import NavBar from '../components/NavBar.jsx';
import HomeComp from '../components/HomeComp.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <React.Fragment>
      <NavBar />
      <HomeComp />
      <Footer />
    </React.Fragment>
  )
}