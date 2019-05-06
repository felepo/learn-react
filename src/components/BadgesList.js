import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter-logo.svg';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgeList__item">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
