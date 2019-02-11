import PropTypes from 'prop-types';
import React from 'react';

import './ShortRaceEntry.scss';
import Card from '../Card';
import { entry as entryType } from '../../types';

export default function ShortRaceEntry({ entry, onClick }) {
  const {
    manufacturer, carClass, carNumber, driverName,
  } = entry;
  return (
    <Card className="ShortRaceEntry">
      <button type="button" className="ShortRaceEntry__button" onClick={onClick}>
        <div className="ShortRaceEntry__container">
          <div className="ShortRaceEntry__carNumber" title="Car number">
            #
            {carNumber}
          </div>
          <div className="ShortRaceEntry__manufacturer" title="Entry name">
            {manufacturer}
          </div>
          <div className="ShortRaceEntry__driverName" title="Driver">
            {driverName}
          </div>
          <div className="ShortRaceEntry__carClass" title="Class">
            {carClass}
          </div>
        </div>
      </button>
    </Card>
  );
}

ShortRaceEntry.propTypes = {
  entry: entryType.isRequired,
  onClick: PropTypes.func.isRequired,
};
