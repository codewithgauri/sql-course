import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ForthData } from '../constant/constantdata';

const FourthFold = () => {
  return (
    <>
      <div className="faq-area">
        <div className="section-title">
          <h2>{ForthData.heading}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="px-24 py-24 dautam-prereq new-dautam">
              <ul className="list-unstyled">
                {ForthData.skills.map((skill, index) => (
                  <li key={index} className="d-flex fs-14 mb-12">
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" style={{color: "#077bd5",}} className="me-10"/>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}

export default FourthFold;
