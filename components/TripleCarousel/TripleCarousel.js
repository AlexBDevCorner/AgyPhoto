import React, { useState } from 'react';

const getNextImageIndex = (currentIndex, imageList) =>
  currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;

const getPreviousImageIndex = (currentIndex, imageList) =>
  currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;

const TripleCarousel = ({ images = {} }) => {
  if (!images[0]) return <>Not Ok</>;

  console.log(images);
  const [inFocusImageIndex, setInFocusImageIndex] = useState(0);

  const nextImageIndex = getNextImageIndex(inFocusImageIndex, images);
  const previousImageIndex = getPreviousImageIndex(inFocusImageIndex, images);

  const onClickHandler = () => {
    const updatedIndex =
      inFocusImageIndex === images.length - 1 ? 0 : inFocusImageIndex + 1;
    setInFocusImageIndex(updatedIndex);
  };

  console.log(previousImageIndex);
  console.log(inFocusImageIndex);
  console.log(nextImageIndex);

  return (
    <>
      <button type="button" onClick={() => onClickHandler()}>
        Test
      </button>
      <div>{images[previousImageIndex].Desktop.url}</div>
      <br />
      <div>{images[inFocusImageIndex].Desktop.url}</div>
      <br />
      <div>{images[nextImageIndex].Desktop.url}</div>
    </>
  );
};

export default TripleCarousel;
