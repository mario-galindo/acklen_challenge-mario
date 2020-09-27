import React, { useEffect, useState } from "react";
import { UseAxiosGet } from "../Hooks/HttpRequests";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function Home(props) {
  const urlGet = `https://carscollectionchallenge.azurewebsites.net/Item`;
  const urlPost = `https://carscollectionchallenge.azurewebsites.net/Item`;

  const [showModal, setShowModal] = useState(false);
  const [car, setNewCar] = useState({ name: "", description: "" });
  var listCar = [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...car, [name]: value });
  };

  const showModalSave = () => {
    setShowModal(true);
  };

  const closeModalSave = () => {
    setShowModal(false);
  };

  const saveNewCar = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("idToken")}` },
    };

    axios
      .post(urlPost, car, config)
      .then((response) => {
        setShowModal(false);
        listCar.data.push(car);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  listCar = UseAxiosGet(urlGet);
  console.log(listCar);
  let content = null;

  if (listCar.data) {
    content = (
      <Container>
        <br />
        <Button color="primary" onClick={showModalSave}>
          Save new colleccion
        </Button>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listCar.data.map((elemento, key) => (
              <tr key={key}>
                <td>{elemento.id}</td>
                <td>{elemento.name}</td>
                <td>
                  <Link to={`/car/${elemento.id}`}>
                    <Button color="success" style={{ marginRight: "5px" }}>
                      View
                    </Button>
                  </Link>
                  <Button color="warning" style={{ marginRight: "5px" }}>
                    Edit
                  </Button>
                  <Button color="danger" style={{ marginRight: "5px" }}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <div>
      <Modal isOpen={showModal}>
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
              value={car.name}
              name="name"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Description:</label>
            <input
              className="form-control"
              value={car.description}
              name="description"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={saveNewCar}>
            Save
          </Button>
          <Button className="btn btn-danger" onClick={closeModalSave}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <h3>Yours Cars</h3>
      {content}
    </div>
  );
}

export default Home;
