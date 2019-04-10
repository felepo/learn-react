import React from 'react';

import './styles/Home.css';
import platziStars from '../images/stars.svg';

function Home() {
  return (
    <div className="Home">
      <img
        src={platziStars}
        alt="Platzi Conf Logo"
        className="img-fluid Home__img-stars"
      />
      <div>Logo</div>
      <div>Logo Grande</div>
    </div>
  );
}

export default Home;
