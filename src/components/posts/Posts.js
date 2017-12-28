import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TimeStamp from 'react-timestamp';
import 'semantic-ui-css/semantic.min.css';

class Posts extends Component {

  handlePostSelection(idPost){
    console.log('post selecionado');
  };

  render() {

    const {posts} = this.props.posts;

    return (
        <Item.Group divided>
      {posts.map(post =>
            <Item>
              <Item.Image src={require('../../assets/images/image.png')} />

              <Item.Content>
                <Item.Header as='a'>{post.title}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{post.author}</span>
                </Item.Meta>
                <Item.Description>{post.body}</Item.Description>
                <Item.Extra>
                  <Label>{post.category}</Label>
                </Item.Extra>
              </Item.Content>
            </Item>)},
        </Item.Group>);
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Posts);
