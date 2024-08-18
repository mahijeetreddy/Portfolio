import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/dummy.json';

const LottieAnimation = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '120%' }}>
      <Lottie options={defaultOptions} height={dimensions.height} width={dimensions.width} />
    </div>
  );
};

export default LottieAnimation;
