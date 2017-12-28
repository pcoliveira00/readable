import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react';
import { setFilter, loadFilter } from './actions';
import 'semantic-ui-css/semantic.min.css';

class Filters extends Component {
  componentDidMount() {
    this.props.loadFilter();
  }

  handleChange(e, data) {
    e.preventDefault();
    this.props.setFilter(data.value);
  }

  render() {
    const { filter } = this.props.filter;

    const options = [
      { key: 1, text: 'voteScore', value: 'voteScore' },
      { key: 2, text: 'timestamp', value: 'timestamp' },
    ];

    return (
      <div> Filter by:
        <Dropdown text={filter} options={options} fluid selection onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (data) => {
      dispatch(setFilter(data));
    },
    loadFilter: () => {
      dispatch(loadFilter());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
