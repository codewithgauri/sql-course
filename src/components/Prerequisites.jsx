import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { prerequisitesData } from '../constant/constantdata';

const Prerequisites = () => {
  return (
    <>
      <div className="faq-area">
        <div className="section-title">
          <h2>{prerequisitesData.heading}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="px-24 py-24 new-dautam">
              <ul className="list-unstyled">
                {prerequisitesData.list.map((item, index) => (
                  <li className="d-flex fs-14 mb-12" key={index}>
                    {/* <FontAwesomeIcon icon={faArrowRight} className="me-10" /> */}
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" style={{color: "#077bd5",}} className="me-10" />      
                             {item}
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

export default Prerequisites;
