const FontFaceObserver = require('fontfaceobserver');

const Font = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Exo+2:400,400i&display=swap&subset=cyrillic';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const exo2 = new FontFaceObserver('Exo 2');

  exo2.load().then(() => {
    document.documentElement.classList.add('Exo2');
  });
};

export default Font;
