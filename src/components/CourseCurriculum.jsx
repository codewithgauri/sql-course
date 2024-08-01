import React, { useState } from 'react';
import { Course } from '../constant/constantdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const CourseCurriculum = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleToggle = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="faq-area">
        <div className="section-title d-md-flex d-block justify-content-between">
          <h2>{Course.heading}</h2>
          <p className="font-weight-bold module-color mb-0 mt-10 mt-md-0">
            {Course.sub_heading}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-collapse-area">
              <div className="accordion">
                {Course.courseDetail.map((course, index) => (
                  <div className="question" key={index}>
                    <a
                      href="#"
                      className={`accordion-button disabled1 ${openPanel === course.panelId ? '' : 'collapsed'}`}
                      type="button"
                      onClick={(e) => { preventDefault(e); handleToggle(course.panelId); }}
                    >
                      <span className="me-auto">{course.title}</span>
                      <p className="fs-14 fw-400 text-gray-500 pt-6 mb-0 text-nowrap">
                        {course.sessions}
                      </p>
                    </a>
                    <div
                      className={`collapse ${openPanel === course.panelId ? 'show' : ''}`}
                    >
                      <div className="card-body dautam-crriculam">
                        <ul className="list-unstyled">
                          {course.content.map((item, itemIndex) => (
                            <a href="#" key={itemIndex}>
                              <li className="d-md-flex justify-content-between mb-16">
                                <p className="mb-0">
                                  <FontAwesomeIcon icon={faPlayCircle} className="me-10 text-primary" />
                                  {item.title}
                                </p>
                              </li>
                            </a>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCurriculum;
