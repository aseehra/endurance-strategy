import PropTypes from 'prop-types';
import React from 'react';

import FilterSearch from '../../containers/FilterSearch';

export default function TopNav() {
  return (
    <nav className="TopNav">
      <FilterSearch />
    </nav>
  );
}

TopNav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      raceId: PropTypes.string.isRequired,
      entryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
