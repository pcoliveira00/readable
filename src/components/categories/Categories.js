import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadCategories } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Categories extends Component {
  render() {
    const { categories } = this.props.categories;
    return (
        <div>
        <p>Categories: </p>
      <Card.Group>
        {categories.map(category => (
            <Card centered>
              <Card.Content>
                <Card.Header>{category.name}</Card.Header>
              </Card.Content>
            </Card>),
        )}
      </Card.Group>
        </div>);
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
