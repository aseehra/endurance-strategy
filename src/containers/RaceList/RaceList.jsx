import React from 'react';

import Race from '../../components/Race';

export default class RaceList extends React.Component {
  componentDidMount() {
    // TODO: fetch races
  }

  render() {
    const races = [
      {
        id: 20,
        name: '24 Series',
        location: 'Austin',
      },
    ];
    const raceComponents = races.map(race => <Race {...race} key={race.id} />);
    return <div className="RaceList">{raceComponents}</div>;
  }
}
