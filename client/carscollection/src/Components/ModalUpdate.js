import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function ModalUpdate(props) {
  return (
    <Modal isOpen={props.showModalUpdate}>
      <ModalHeader>
        <div>
          <h3>Update a car</h3>
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
        <Button color="warning" onClick={props.updateCar}>
          Update
        </Button>
        <Button className="btn btn-danger" onClick={props.closeModalUpdate}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalUpdate;
