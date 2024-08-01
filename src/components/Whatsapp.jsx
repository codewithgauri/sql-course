import React, { useEffect, useState } from 'react';
import whatsappimg from '../assets/img/whatsappico.png';

const Whatsapp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const header = document.querySelector('header');
      const backToTopButton = document.querySelector('.back-to-top');

      if (header) {
        header.classList.toggle('nav-active', scrollTop > 10);
      }
      
      if (backToTopButton) {
        backToTopButton.classList.toggle('top-btn-active', scrollTop > 400);
      }
      
      setShowButton(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showButton && (
        <a className="back-to-top" href="https://wa.link/gj6h7d" target="_blank" rel="noopener noreferrer">
          <img src={whatsappimg} alt="WhatsApp" />
        </a>
      )}
    </div>
  );
};

export default Whatsapp;
