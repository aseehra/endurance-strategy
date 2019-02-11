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
