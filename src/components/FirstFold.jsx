import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import nirmalsir from '../assets/img/nirmalsir.png';
import { firstData, stickyData } from '../constant/constantdata';


const FirstFold = () => {
  return (
    <>
      <div className="home-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <div className="course_intro_dautam mt-24">
                <h1 className="fs-42 text-white fw-800">
                  {firstData.description}<p1>{firstData.description_span}</p1>
                </h1>
                <div className="mob-purchase-section d-lg-none d-block">
                  <div className="purchase-section mb-16">
                    <div className="card dautam-mob-purchase p-1">
                      <img
                        src={stickyData.headingImg}
                        className="preview_thumb card-img-top"
                        alt="Get Job Ready: Power BI Data Analytics for All Levels"
                      />
                      <div className="card-body">
                        <div className="text-center mt-2 mb-2">
                          <a
                            className="button net-btn w-100"
                            href={stickyData.indiaCheckout.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {stickyData.indiaCheckout.label}
                          </a>
                          <a
                            className="button net-btn w-100 mt-2"
                            href={stickyData.globalCheckout.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {stickyData.globalCheckout.label}
                          </a>
                        </div>
                        <h5 className="card-title fs-20 fw-600 mb-20 text-dark mt-20">{stickyData.listHeading}</h5>
                        <ul className="list-unstyled dautam-mob-purchase-points mb-0">
                          {stickyData.list.map((item, index) => (

                            <li className="d-flex fs-16 mb-12 text-gray-800 fw-400 align-items-start" key={index}>
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
                <p className="text-white">
                  {firstData.para1}
                </p>
                <hr className="my-3 dautam-hero-border b-dashed border-light" />
                <div className="rating_bar-dautam d-flex align-items-center gap-3 mb-16">
                  <p className="text-warning mb-0 rating_number">{firstData.para_rating}</p>
                  <div className="d-flex align-items-center text-warning gap-2">
                    <div className="generated-star-rating-wrap">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  
                  <a href="#" className="text-white">
                    ({firstData.para_rating_number} ratings)
                  </a>
                  <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#63E6BE"}} />
                  <span className="font-semibold" style={{color: "#63E6BE"}}>5449</span> <span className="ml-1 tex "style={{color: "#63E6BE"}}>learners</span>
                </div>
                

                <div className="author_bar d-flex align-items-center gap-3 fs-16 mb-16">
                  <p className="text-gray-400 mb-0 fs-16">Created by:</p>
                  <div className="d-flex align-items-center">
                    <div className="rbt-avater me-6">
                      <a href="https://www.linkedin.com/in/datumdiscovery/" target="_blank" rel="noopener noreferrer">
                        <img src={nirmalsir} alt="nirmal pant" />
                      </a>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/datumdiscovery/"
                      className="text-warning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nirmal Pant
                    </a>
                  </div>
                </div>
                <div className="update_status_bar d-flex align-items-center gap-4 fs-16 mb-16">
                  <p className="text-gray-400 mb-0 fs-16">
                    <FontAwesomeIcon icon={faClock} className="me-6" />
                    Last Updated: <span className="fw-500 text-white">{firstData.last_updated}</span>
                  </p>
                  <p className="text-gray-400 mb-0 fs-16">
                    <FontAwesomeIcon icon={faGlobe} className="me-6" />
                    {firstData.en}
                  </p>
                </div>
                <div className="Lifetime_status_bar d-flex align-items-center gap-3 fs-16 mb-16">
                  <p className="text-success mb-0 fs-16">
                    <FontAwesomeIcon icon={faHourglass} className="me-6" />
                    {firstData.para_2}
                  </p>
                </div>
                <h1 className='sliding_text'>
                 Turn Data into 
                  <span className="slider">
                    <span className="slider__word">Decisions</span>
                    <span className="slider__word">Stories</span>
                    <span className="slider__word">Insights</span>
                  </span>
                </h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstFold;
