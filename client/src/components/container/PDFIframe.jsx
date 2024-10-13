import React from 'react';

export default function PDFIframe({ source, title }) {
  return (
    <React.Fragment>
      <div className="title">
        
      </div>
      <div className="hi">
        <iframe src={source}>
          
        </iframe>
      </div>
    </React.Fragment>
  )
}