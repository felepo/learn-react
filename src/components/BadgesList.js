import React from 'react';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter-logo.svg';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgeList__item">
              <img
                className="BadgeList__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              />

              <div className="BadgeList__text-area">
                <p>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                </p>
                <p className="BadgeList__twitter-link">
                  <span>
                    <img
                      className="BadgeList__twitter-logo"
                      src={twitterLogo}
                      alt="Twitter Logo"
                    />
                  </span>
                  @{badge.twitter}
                </p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
