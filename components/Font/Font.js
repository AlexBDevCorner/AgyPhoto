const FontFaceObserver = require('fontfaceobserver');

const Font = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const montseratt = new FontFaceObserver('Montserrat');

  montseratt.load().then(() => {
    document.documentElement.classList.add('Montserrat');
  });
};

export default Font;
