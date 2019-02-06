import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Race from '../../components/Race';
import { getRacesLoading, getRaces } from '../../reducers';

function RaceList(props) {
  const { isLoading, races } = props;
  if (isLoading) {
    return <div className="loading">Loading…</div>;
  }

  const raceComponents = Object.keys(races).map(id => <Race {...races[id]} key={id} />);
  return <div className="RaceList">{raceComponents}</div>;
}

RaceList.propTypes = {
  races: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      location: PropTypes.string,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export function mapStateToProps(state) {
  return {
    races: getRaces(state),
    isLoading: getRacesLoading(state),
  };
}

export default connect(mapStateToProps)(RaceList);
