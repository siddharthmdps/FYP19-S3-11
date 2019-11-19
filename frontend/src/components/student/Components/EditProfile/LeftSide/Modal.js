import React from 'react';
import Button1 from '../../../../common_assets/Button1/Button1';

const Modal = props => {
    console.log(props);
    // let file = URL.createObjectURL(props.NewProfile)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Upload Picture
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            ABCd
            {/* <image src={file}/> */}
        </Modal.Body>
        <Modal.Footer>
            <Button1 onClick={props.onHide}>Cancel</Button1>
          <Button1 click={props.click}>Upload</Button1>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Modal;