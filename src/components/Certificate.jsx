import React from 'react';
import dautamcertificate from '../assets/img/dautamcertificate.png';
import {certification} from '../constant/constantdata';
const Certificate = () => {
  return (
    <>
      <div className="faq-area" id="faq">
        <div className="section-title">
          <h2>{certification.heading}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="dautam-certificate">
              <img 
                className="img-fluid w-100 d-block border-2" 
                src={certification.Image}
                alt="Dautam Certificate"
              />
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Certificate;
