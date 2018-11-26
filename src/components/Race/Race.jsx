import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Race.scss';
import Card from '../Card';

export default function Race(props) {
  const { id, location, name } = props;
  return (
    <Link to={`/race/${id}`} className="unadorned-link">
      <div className="Race">
        <Card>
          <header>
            <h2 className="Race__name">{name}</h2>
          </header>
          <div className="Race__location">{location}</div>
        </Card>
      </div>
    </Link>
  );
}

Race.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
