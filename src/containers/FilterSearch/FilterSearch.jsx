import React from 'react';
import { connect } from 'react-redux';

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
    console.log('Change', this.searchInput.current.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Search"
          ref={this.searchInput}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default connect()(FilterSearch);
