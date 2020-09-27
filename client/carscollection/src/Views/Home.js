import React from "react";
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

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = (
      <Container>
        <br />
        <Button color="primary">Save new colleccion</Button>
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
      <h3>Yours Cars</h3>
      {content}
    </div>
  );
}

export default Home;
