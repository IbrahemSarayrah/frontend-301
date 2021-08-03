import React, { Component } from 'react'
import { Modal,Button, Form } from 'react-bootstrap'

export class UpdateFavDataModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update The Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.props.UpdateFavData}>
                <Form.Control type="text" name='updateTitle' defaultValue={this.props.updateTitle} />
                <br/>
                <Form.Control type="text" name='updateImageUrl' defaultValue={this.props.updateImageUrl} />
                <br/>
                <Form.Control type="submit" value='Submit The Update' />
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default UpdateFavDataModal
