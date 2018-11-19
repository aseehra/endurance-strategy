import React from 'react';
import PropTypes from 'prop-types';

import './Race.scss';
import Card from '../Card';

export default function Race(props) {
  const { id, location, name } = props;
  return (
    <a href={`/${id}`} className="unadorned-link Race">
      <Card>
        <header>
          <h2 className="h6 Race__name">{name}</h2>
        </header>
        <div className="Race__location">{location}</div>
      </Card>
    </a>
  );
}

Race.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
