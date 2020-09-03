import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newPost} from '../actions/actions'

class ModalView extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onEdit(event){
    this.setState({[event.target.name] : event.target.value})
  }
  onSubmit(event){
    console.log("hhey ther");
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
      userId: Math.floor(Math.random() * 100)
    }
    this.props.newPost(post)
  }
  render() {

    return(
      <>
      <Form onSubmit = {this.onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" name = "title" onChange = {this.onEdit} value = {this.state.title} />

        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" name = "body" onChange = {this.onEdit} value = {this.state.body} />
          <Form.Text className="text-muted">
            Say something nice :)
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
    )
  }
}

ModalView.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default connect(null, {newPost})(ModalView);
