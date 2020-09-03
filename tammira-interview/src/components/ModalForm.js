import React from 'react';
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ModalView from './ModalView'
function ModalForm() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md = "auto">
        <Button variant="primary" onClick={handleShow}>
          New Post
        </Button>
        </Col>
      </Row>
    </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make a new post!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalView/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
