import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import GridModal from '../../components/GridModal';
import { fetchRaceEntries as fetchRaceEntriesAction } from '../../actions/races';
import { getRaceEntries, getEntriesLoading } from '../../reducers';

export class ComparisonModal extends React.Component {
  componentDidMount() {
    const {
      fetchRaceEntries, entries, entriesLoading, raceId,
    } = this.props;

    if (!entries && !entriesLoading) {
      fetchRaceEntries(raceId);
    }
  }

  render() {
    const { entries, entriesLoading } = this.props;

    if (entriesLoading) {
      return null;
    }

    return (
      <div className="ComparisonModal">
        <GridModal>
          {Object.values(entries).map(entry => (
            <div key={entry.id}>{entry.manufacturer}</div>
          ))}
        </GridModal>
      </div>
    );
  }
}

ComparisonModal.propTypes = {
  raceId: PropTypes.string.isRequired,
  entriesLoading: PropTypes.bool.isRequired,
  entries: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      manufacturer: PropTypes.string.isRequired,
      driverName: PropTypes.string.isRequired,
      carNumber: PropTypes.number.isRequired,
    }),
  ),

  fetchRaceEntries: PropTypes.func.isRequired,
};

ComparisonModal.defaultProps = {
  entries: null,
};

const mapStateToProps = state => ({
  entriesLoading: getEntriesLoading(state),
  entries: getRaceEntries(state),
});

const mapDispatchToProps = {
  fetchRaceEntries: fetchRaceEntriesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparisonModal);
