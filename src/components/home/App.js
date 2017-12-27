import React, { Component } from 'react';
import './App.css';
import Categories from '../categories/Categories';
import * as ReadableAPI from '../../api';
import { loadCategories } from '../categories/actions';
import { loadPosts } from '../posts/actions';
import { loadFilter } from '../filters/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.props.loadCategories(categories);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Header</p>
        </header>
        <Categories/>
        <Filters />
        <Posts />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (data) => {
      dispatch(loadPosts(data));
    },
    loadCategories: (data) => {
      dispatch(loadCategories(data));
    },
    loadFilter: (data) => {
      dispatch(loadFilter(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
