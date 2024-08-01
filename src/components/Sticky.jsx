import React from 'react';
import { stickyData } from '../constant/constantdata';

const Sticky = () => {
  return (
    <div className="col-lg-4 col-12">
      <div className="course-details-purchase purchase-section position-sticky mb-16 d-lg-block d-none">
        <div className="card">
          <img 
            src={stickyData.headingImg} 
            className="preview_thumb card-img-top" 
            alt="Get Job Ready: Power BI Data Analytics for All Levels" 
          />
          <div className="card-body">
            <div className="text-center mb-24">
              <a 
                className="button net-btn me-8 spark__container" 
                href={stickyData.indiaCheckout.link}
                target="_blank" 
                rel="noopener noreferrer"
              >


                {stickyData.indiaCheckout.label}
              </a>
              <a 
                className="button net-btn" 
                href={stickyData.globalCheckout.link}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {stickyData.globalCheckout.label}
              </a>
            </div>

            <h5 className="card-title fs-20 fw-600 mb-20 text-dark mt-20">
              {stickyData.listHeading}
            </h5>
            <ul className="list-unstyled mb-0">
              {stickyData.list.map((item, index) => (
                <li 
                  className="d-flex fs-16 mb-12 text-gray-800 fw-400 align-items-start" 
                  key={index}
                >
                  <img 
                    src={item.img} 
                    className="img-fluid me-20" 
                    alt={item.text} 
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
