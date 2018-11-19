import React from 'react';
import { connect } from 'react-redux';

import Race from '../../components/Race';
import { fetchRaces as fetchRacesAction } from '../../actions/races';
import { getRaces } from '../../reducers';

class RaceList extends React.Component {
  componentDidMount() {
    const { fetchRaces } = this.props;
    fetchRaces();
  }

  render() {
    const { races } = this.props;
    const raceComponents = Object.keys(races).map(id => (
      <Race {...races[id]} key={id} />
    ));

    return <div className="RaceList">{raceComponents}</div>;
  }
}

export function mapStateToProps(state) {
  return {
    races: getRaces(state),
  };
}

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RaceList);
