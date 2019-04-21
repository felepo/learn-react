import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import astronautsImg from '../images/astronauts.svg';
import platziConfLogo from '../images/platziconf-logo.svg';

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <img
              src={platziConfLogo}
              alt="Platzi Conf Logo"
              className="img-fluid"
            />

            <h1 className="Home__h1">Badge Management System</h1>

            <Link to="/badges" className="btn btn-primary Home__btn-start">
              Start
            </Link>
          </div>
          <div className="col-12 col-sm-8">
            <img src={astronautsImg} alt="Astronauts" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
