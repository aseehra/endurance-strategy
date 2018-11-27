import PropTypes from 'prop-types';
import React from 'react';

import FilterSearch from '../../containers/FilterSearch';

export default function TopNav(props) {
  const { history, match } = props;
  const { raceId } = match.params;

  return (
    <nav className="TopNav">
      <FilterSearch history={history} raceId={raceId} />
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
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
