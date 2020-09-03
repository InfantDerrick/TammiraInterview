import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/actions'



class PostView extends Component{
  componentWillMount(){
    this.props.fetchPosts()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.userPost){
      this.props.posts.unshift(nextProps.userPost)
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={post.id}>
          {post.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={post.id}>
          <Card.Body>{post.body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ))
    return(
      <Container>
          <Row className="justify-content-md-center">
            <Col md = "auto">
              <h1>Welcome to: Posts!</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Accordion defaultActiveKey="0">
                {postItems}
              </Accordion>
            </Col>
          </Row>
      </Container>

    )
  }
}
PostView.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired,
   userPost: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  userPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(PostView);
