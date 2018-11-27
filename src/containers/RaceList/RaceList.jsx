import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MainOnboarding from '../MainOnboarding';
import Race from '../../components/Race';
import { getRacesLoading, getRaces, getMainOnboardingSeen } from '../../reducers';

function RaceList(props) {
  const { isLoading, races, showOnboarding } = props;

  if (isLoading) {
    return null;
  }

  const onboarding = showOnboarding ? <MainOnboarding /> : null;
  const raceComponents = Object.keys(races).map(id => <Race {...races[id]} key={id} />);
  return (
    <div className="RaceList">
      {onboarding}
      {raceComponents}
    </div>
  );
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
  showOnboarding: PropTypes.bool.isRequired,
};

export function mapStateToProps(state) {
  return {
    races: getRaces(state),
    isLoading: getRacesLoading(state),
    showOnboarding: !getMainOnboardingSeen(state),
  };
}

export default connect(mapStateToProps)(RaceList);
