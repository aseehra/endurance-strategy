import PropTypes from 'prop-types';
import queryString from 'query-string';
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
    const { history, raceId, searchValue } = this.props;
    const query = queryString.stringify({ search: searchValue });
    history.push(`/race/${raceId}?${query}`);
  }

  onChange() {
    const { onSearchChange } = this.props;
    onSearchChange(this.searchInput.current.value);
  }

  render() {
    const { className, searchValue } = this.props;
    return (
      <form onSubmit={this.onSubmit} className={`FilterSearch__form ${className}`}>
        <input
          type="search"
          placeholder="Search"
          ref={this.searchInput}
          onChange={this.onChange}
          value={searchValue}
          className="FilterSearch__input"
        />
      </form>
    );
  }
}

FilterSearch.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  raceId: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  className: PropTypes.string,
};

FilterSearch.defaultProps = {
  className: '',
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
