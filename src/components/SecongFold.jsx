import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SecondData } from '../constant/constantdata';

const SecondFold = () => {
  return (
    <>
      <div className="faq-area">
        <div className="section-title">
          <h2>{SecondData.heading}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="px-24 py-24 dautam-prereq dautam-learn-bg">
              <ul className="list-unstyled">
                {SecondData.list.map((item, index) => (
                  <li className="d-flex fs-14 mb-12" key={index}>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="me-10" />
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

export default SecondFold;
