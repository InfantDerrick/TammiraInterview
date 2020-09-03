import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

class PostView extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({posts: json}));
  }
  render() {
    const postItems = this.state.posts.map(post => (
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
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Accordion defaultActiveKey="0">
                {postItems}
              </Accordion>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md = "auto">
                <Button>Post!</Button>
            </Col>
          </Row>
        </Container>

    )
  }
}

export default PostView;
