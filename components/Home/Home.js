import React from 'react';
import Carousel from '../Carousel';

const Home = ({ images }) => {
  return (<>
    <div className="gallery-image-links">
      {images.map(image => (
        <div key={image.alt} className="img-constraint">
          <img className="grow" src={image.TEST.url} alt={image.TEST.alt} />
        </div>))}
    </div>
    <style jsx>
      {`
        .gallery-image-links {
          display: grid;
          grid-template-columns: 600px 600px;
          grid-template-rows: 400px 400px;
          column-gap: 12px;
          row-gap: 12px;
        }

        .img-constraint {
          overflow: hidden;
          width: 600px;
          height: 400px;
        }

        .img-constraint .grow { 
          transition: all .5s ease-in-out;
        }
          
        .img-constraint .grow:hover { 
          transform: scale(1.3); 
        }

        @media screen and (max-width: 1600px) {
          .gallery-image-links {
            grid-template-columns: 600px;
            grid-template-rows: 400px 400px 400px 400px;
            justify-content: center;
          }
        }
      `}
    </style>
  </>
  );
}


export default Home;
