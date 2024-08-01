import React, { useState } from 'react';
import { FaqData } from '../constant/constantdata';

const Faq = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleToggle = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  return (
    <div className="faq-area" id="faq">
      <div className="section-title">
        <h2>{FaqData.heading}</h2>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="faq-collapse-area">
            <div className="accordion" id="answer">
              {FaqData.faqs.map((faq, index) => (
                <div className="question" key={index}>
                  <button
                    className="btn btn-link btn-block faq-sec"
                    type="button"
                    onClick={() => handleToggle(faq.panelId)}
                  >
                    {faq.question}
                  </button>
                  <div
                    id={faq.panelId}
                    className={`collapse ${openPanel === faq.panelId ? 'show' : ''}`}
                    style={{
                      maxHeight: openPanel === faq.panelId ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease'
                    }}
                  >
                    <div className="card-body">
                      <p className='faq-ans'>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
