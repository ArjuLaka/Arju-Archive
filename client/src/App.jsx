import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import UploadLearningModule from './pages/UploadLearningModule.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faYoutube, faInstagram, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faYoutube, faInstagram, faDiscord, faTwitch, faPaperPlane)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload">
          <Route path="learning-module" element={<UploadLearningModule />} />
        </Route>
        <Route path="/PDFViewer/:title">
          
        </Route>
        <Route path="/stikes">
          <Route path="farmasetika">
            
          </Route>
          <Route path="k3">
            
          </Route>
        </Route>
        <Route path="user">
          <Route path="signin" />
          <Route path="signup" />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
