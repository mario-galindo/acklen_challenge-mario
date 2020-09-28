import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function ModalCreate(props) {
  return (
    <Modal isOpen={props.showModal}>
      <ModalHeader>
        <div>
          <h3>Save a car</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Name:</label>
          <input
            className="form-control"
            value={props.carName}
            name="name"
            type="text"
            onChange={props.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Description:</label>
          <input
            className="form-control"
            value={props.carDescription}
            name="description"
            type="text"
            onChange={props.handleChange}
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={props.saveNewCar}>
          Save
        </Button>
        <Button className="btn btn-danger" onClick={props.closeModalSave}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalCreate;
