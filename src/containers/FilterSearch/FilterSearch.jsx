import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { updateRaceEntryFilter } from '../../actions/races';
import { getRaceEntriesFilter } from '../../reducers';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // TODO: redirect to a the entries on enter
    console.log('Submit', this.searchInput.current.value);
  }

  onChange() {
    const { onSearchChange } = this.props;
    onSearchChange(this.searchInput.current.value);
  }

  render() {
    const { searchValue } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="search"
          placeholder="Search"
          ref={this.searchInput}
          onChange={this.onChange}
          value={searchValue}
        />
      </form>
    );
  }
}

FilterSearch.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  onSearchChange: updateRaceEntryFilter,
};

const mapStateToProps = state => ({
  searchValue: getRaceEntriesFilter(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterSearch);
