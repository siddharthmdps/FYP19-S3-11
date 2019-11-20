import React from 'react';
import Button1 from '../../../../common_assets/Button1/Button1';
import Modal from 'react-bootstrap/Modal'
import {Row, Col, ResponsiveEmbed, Image } from 'react-bootstrap'

const ModalTemp = props => {
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Profile Picture Upload
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio="1by1" >
                <Image src={URL.createObjectURL(props.NewProfile)} style={{position: 'absolute', borderRadius: '50%', objectFit: 'cover'}} bsPrefix />
            </ResponsiveEmbed>
            Do you want to continue with the upload?
        </Modal.Body>
        <Modal.Footer>
            <Button1 click={props.onHide}>Cancel</Button1>
          <Button1 click={props.click}>Upload</Button1>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalTemp;