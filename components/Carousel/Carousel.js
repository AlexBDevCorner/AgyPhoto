import React, { useEffect, useState } from 'react';

import useInterval from './UseInterval';

import ArrowLeft from './Icons/ArrowLeft';
import ArrowRight from './Icons/ArrowRight';
import PlayButton from './Icons/PlayButton';
import PauseButton from './Icons/PauseButton';

const imagesMockup = [
  { url: 'https://picsum.photos/id/307/375/500', id: 0, alt: 'img0' },
  { url: 'https://picsum.photos/id/308/375/500', id: 1, alt: 'img1' },
  { url: 'https://picsum.photos/id/310/375/500', id: 2, alt: 'img2' }
];

const DEFAULT_DELAY = 2000;

const Carousel = ({ images = imagesMockup }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [delay, setDelay] = useState(DEFAULT_DELAY);

  const nextImage = () => {
    if (currentImageIndex + 1 === images.length) setCurrentImageIndex(0);
    else setCurrentImageIndex(currentImageIndex + 1);
  };

  const previousImage = () => {
    if (currentImageIndex === 0) setCurrentImageIndex(images.length - 1);
    else setCurrentImageIndex(currentImageIndex - 1);
  };

  useInterval(() => {
    nextImage();
  }, delay);

  const toggleAutomaticCarousel = () => {
    const newDelay = delay ? null : DEFAULT_DELAY;
    setDelay(newDelay);
  };

  return (
    <>
      <picture>
        <img
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt}
        />
        <ArrowLeft
          action={() => {
            if (delay) setDelay(null);
            previousImage();
          }}
          width={32}
          height={32}
          fill="white"
          positionTop="50%"
          positionLeft="2%"
        />
        <ArrowRight
          action={() => {
            if (delay) setDelay(null);
            nextImage();
          }}
          width={32}
          height={32}
          fill="white"
          positionTop="50%"
          positionLeft="90%"
        />
        {delay ? (
          <PauseButton
            action={() => toggleAutomaticCarousel()}
            width={32}
            height={32}
            fill="white"
            positionTop="90%"
            positionLeft="50%"
          />
        ) : (
          <PlayButton
            action={() => toggleAutomaticCarousel()}
            width={32}
            height={32}
            fill="white"
            positionTop="90%"
            positionLeft="50%"
          />
        )}
      </picture>
      <style jsx>
        {`
          picture {
            position: relative;
            max-width: 800px;
            max-height: 600px;
            display: inline-block;
          }

          picture img {
            display: block;
            max-width: 800px;
            max-height: 600px;
            height: auto;
          }

          picture svg {
            position: absolute;
            top: 50%;
            left: 50%;
          }
        `}
      </style>
    </>
  );
};

export default Carousel;
