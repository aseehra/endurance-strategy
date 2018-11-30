import PropTypes from 'prop-types';
import React from 'react';

import './TopNav.scss';
import FilterSearch from '../../containers/FilterSearch';
import Logo from '../Logo';

export default function TopNav(props) {
  const { history, match } = props;
  const { raceId } = match.params;

  return (
    <nav role="navigation" className="TopNav">
      <Logo className="TopNav__left" />
      <FilterSearch history={history} raceId={raceId} className="TopNav__center" />
      {/* A fake element for centering purposes */}
      <Logo className="TopNav__right" />
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
