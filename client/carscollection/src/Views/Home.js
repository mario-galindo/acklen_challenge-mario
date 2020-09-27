import React,{useState} from "react";
import { UseAxiosGet } from "../Hooks/HttpRequests";
import { Link } from "react-router-dom";
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
  const url = `https://carscollectionchallenge.azurewebsites.net/Item`;
  const [showModal,setShowModal] = useState(false);

  const mostrarModalInsertar = () => {
    setShowModal(true);
  };

  const cerrarModalInsertar = () => {
    setShowModal(false);
  };

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = (
      <Container>
        <br />
        <Button color="primary" onClick={mostrarModalInsertar}>Save new colleccion</Button>
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
            {cars.data.map((elemento, key) => (
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
            <input className="form-control" name="name" type="text" />
          </FormGroup>

          <FormGroup>
            <label>Description:</label>
            <input className="form-control" name="description" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.insertar()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={cerrarModalInsertar}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <h3>Yours Cars</h3>
      {content}
    </div>
  );
}

export default Home;
