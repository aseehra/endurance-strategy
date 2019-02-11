import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const entry = PropTypes.shape({
  id: PropTypes.number.isRequired,
  carNumber: PropTypes.number,
  carClass: PropTypes.string,
  manufacturer: PropTypes.string,
  positionOverall: PropTypes.number,
  positionInClass: PropTypes.number,
  driverName: PropTypes.string,
  links: PropTypes.shape({
    statistics: PropTypes.string,
  }).isRequired,
});

export const statistics = PropTypes.shape({
  fastestLap: PropTypes.shape({
    driverName: PropTypes.string,
    lapNumber: PropTypes.number,
    lapTime: PropTypes.number,
  }),
  averageLapTime: PropTypes.number,
  pitStops: PropTypes.arrayOf(
    PropTypes.shape({
      lapIn: PropTypes.number,
      lapOut: PropTypes.number,
      timeInLane: PropTypes.number,
    }),
  ),
  driverData: PropTypes.arrayOf(
    PropTypes.shape({
      fastestLapTime: PropTypes.number,
      averageLapTime: PropTypes.number,
      driverId: PropTypes.number,
      driverName: PropTypes.string,
    }),
  ),
  links: PropTypes.shape({
    pitStops: PropTypes.string,
    stints: PropTypes.string,
    drivers: PropTypes.string,
  }),
});
