import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="containter">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Fernando"
                lastName="Poncio"
                twitter="fherponcio"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
