import React from 'react';
import NavBar from '../components/NavBar.jsx';
import PDFIframe from '../components/container/.PDFIframe.jsx';
import Footer from '../components/Footer.jsx';
import { useParams } from "react-router-dom"

export default function PDFViewer() {
  let { sourceParams } = useParams();
  return (
    <React.Fragment>
      <NavBar />
      <PDFIframe source={sourceParams} title={} />
      <Footer />
    </React.Fragment>
  )
}