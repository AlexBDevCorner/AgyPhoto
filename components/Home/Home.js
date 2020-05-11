import React from 'react';

export default () => (
  <>
    <section id="home-section">
      <div className="column main-column">
        <nav>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>
      <div className="column content-column">
        <div className="column about-me-column">
          <div className="about-me-text">
            <p>Hello! That is me!</p>
          </div>
          <picture>
            {/* <source media="(min-width: 650px)" srcSet={carouselImages[0].url} /> */}
            <img src="img_orange_flowers.jpg" alt="Flowers" />
          </picture>
        </div>
        <div className="column portrait-column"></div>
      </div>
    </section>
  </>
);
