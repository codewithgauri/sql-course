import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { testimonialData } from '../constant/constantdata';

const ThirdFold = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.05,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <>
      <div className="mobileapp_wrapper testimonial-area">
        <div className="section-title">
          <h2>{testimonialData.heading}</h2>
        </div>
        <div className="owl-carousel mobile_active">
          <Slider {...settings}>
            {testimonialData.testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <div className="testi-box">
                <div className="avatar-img-area mt_25">
                    <img src={testimonial.img} alt="avatar" />
                  </div>
                  <div className="name-area mt_25">
                    <h4>{testimonial.name}</h4>
                  </div>
                  <div className="icon-area mt_20">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="mt_10">
                    {testimonial.review} <a href={testimonial.link} target="_blank" className="text-warning" rel="noopener noreferrer">Read more..</a>
                  </p>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ThirdFold;
