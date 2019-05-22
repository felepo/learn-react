import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter-logo.svg';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
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
    </div>
  );
}

export default BadgesList;
