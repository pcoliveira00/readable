import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadCategories } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Categories extends Component {
  render() {

    const {categories} = this.props.categories;
    return (
      <div>
        <p>Categories</p>
        <ul>
          {categories.map(category =>
              <Link to={category.name}><li key={category.name}>{category.name}</li></Link>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: (data) => {
      dispatch(loadCategories(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
