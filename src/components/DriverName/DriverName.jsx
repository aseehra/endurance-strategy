import PropTypes from 'prop-types';
import React from 'react';

export default function DriverName(props) {
  const { isMobile, name } = props;

  if (!isMobile) {
    return <span className="DriverName">{name}</span>;
  }

  const nameParts = name.split(' ');
  const shortenedNameParts = [
    ...nameParts.slice(0, -1).map(portion => `${portion[0]}.`),
    nameParts[nameParts.length - 1],
  ];

  return <span className="DriverName">{shortenedNameParts.join(' ')}</span>;
}

DriverName.propTypes = {
  name: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
