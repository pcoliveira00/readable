import React, { Component } from 'react';
import './App.css';
import Categories from '../categories/Categories';
import Filters from '../filters/Filters';
import Posts from '../posts/Posts';
import * as ReadableAPI from '../../api';
import { loadCategories } from '../categories/actions';
import { Button, Modal, Form  } from 'semantic-ui-react'
import { loadPosts } from '../posts/actions';
import { connect } from 'react-redux';

import randomString from 'random-string';

class App extends Component {

  state = {
    open: false,
    id: '',
    timestamp:'',
    title: '',
    body: '',
    author: '',
    category:'',
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  randomNumber = () => {
    const min = 1;
    const max = 100;
    return min + Math.random() * (max - min);
  };

  submitHandler = (e,data) => {
    e.preventDefault();

    alert('A new post was submitted with the title: ' + this.state.title);

    let parameters = Object.assign({}, this.state);
    delete parameters.open;
    delete parameters.dimmer;

    parameters.id = randomString();
    parameters.timestamp = new Date().getTime();

    ReadableAPI.addPost(parameters);

    this.close();
  };

  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.props.loadCategories(categories);
    });

    ReadableAPI.getPosts().then((posts) => {
      this.props.loadPosts(posts);
    });
  }

  render() {

    const { open, dimmer, title, body, author, category } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>Header</p>
        </header>
        <Categories />
        <Filters />
        <Posts />
        <Button onClick={this.show(true)}>Add Post</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create your Post</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.submitHandler}>
              <label>Title</label>
             <Form.Input placeholder='Name' name='title' value={title} onChange={this.handleChange} />
              <label>Body</label>
             <Form.TextArea placeholder='Body' name='body' value={body} onChange={this.handleChange} />
              <label>Author</label>
              <Form.Input placeholder='Author' name='author' value={author} onChange={this.handleChange} />
              <label>Category</label>
              <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
             <Form.Button content='Submit' />
            </Form>
          </Modal.Content>
        </Modal>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
