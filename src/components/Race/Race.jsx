import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

export default function Race(props) {
  const { id, location, name } = props;
  return (
    <Card>
      {id}
      {name}
      {location}
    </Card>
  );
}

Race.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
