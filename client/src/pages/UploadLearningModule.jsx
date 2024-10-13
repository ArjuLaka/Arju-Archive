import React from 'react';
import NavBar from '../components/NavBar.jsx';
import UploadLearningModuleComp from '../components/UploadLearningModuleComp.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <React.Fragment>
      <NavBar />
      <UploadLearningModuleComp />
      <Footer />
    </React.Fragment>
  )
}