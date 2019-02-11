import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import GridModal from '../../components/GridModal';
import ShortRaceEntry from '../../components/ShortRaceEntry';
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
      <GridModal>
        {Object.values(entries).map(entry => (
          <ShortRaceEntry key={entry.id} entry={entry} />
        ))}
      </GridModal>
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
