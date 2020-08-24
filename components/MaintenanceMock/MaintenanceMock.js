import React from 'react';
import Facebook from '../Facebook';
import Instagram from '../Instagram';

export default () => (
  <>
    <section id="reconstruction">
      <p className="msg ru-msg">
        Привет! К сожалению сейчас сайт закрыт на реконструкцию. Скоро всё будет
        на месте, а пока-что со мной можно связаться в социальных сетях!
      </p>
      <p className="msg lv-msg">
        Labdien! Diemžēl saits ir aizvērts rekontrukcijas dēļ. Drīzumā viss būs
        savā vietā, pagaidām ar mani var sazināties sociālajos tīklos!
      </p>
      <p className="msg en-msg">
        Hello! Unfortunately site is closed due to reconstruction. Soon
        everything will be in place again, for now you can contact me in social
        networks!
      </p>
      <div>
        <Facebook />
        <Instagram />
      </div>
    </section>
    <style jsx>
      {`
        #reconstruction {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        #reconstruction div {
          margin-top: 30px;
          display: flex;
          width: 140px;
          flex-direction: row;
          justify-content: space-between;
        }

        #reconstruction div:hover {
          cursor: pointer;
        }

        .msg {
          color: black;
          font-family: 'Exo 2';
          margin-bottom: 15px;
          padding-right: 10px;
          padding-left: 10px;
        }
      `}
    </style>
  </>
);
