import React, { useEffect } from 'react';
import preloader from "../assets/img/preloader.gif";

const PreLoader = () => {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.transition = 'opacity 0.5s';
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }
      }, 500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div id="preloader">
      <img src={preloader} alt="Preloader" />
    </div>
  );
};

export default PreLoader;
