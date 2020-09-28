import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "reactstrap";
import ModalCreate from "../Components/ModalCreate";
import ModalUpdate from "../Components/ModalUpdate";

function Home() {
  const url = `https://carscollectionchallenge.azurewebsites.net/Item`;

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [car, setNewCar] = useState({ name: "", description: "" });
  const [listCar, setListCar] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...car, [name]: value });
  };

  const showModalSave = () => {
    setShowModal(true);
  };

  const closeModalSave = () => {
    setNewCar({ name: "", description: "" });
    setShowModal(false);
  };

  const closeModalUpdate = () => {
    setNewCar({ name: "", description: "" });
    setShowModalUpdate(false);
  };

  const saveNewCar = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("idToken")}` },
    };

    axios
      .post(url, car, config)
      .then((response) => {
        setShowModal(false);
        setListCar((listCar) => [...listCar, car]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCar = (carId) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("idToken")}` },
    };

    var resourceToDelete = url + `/${carId}`;

    axios
      .delete(resourceToDelete, config)
      .then((response) => {
        setListCar((listCar) => listCar.filter((item) => item.id !== carId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUpdateCar = (car) => {
    setNewCar(car);
    setShowModalUpdate(true);
  };

  const updateCar = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("idToken")}` },
    };

    var resourceToUpdate = url + `/${car.id}`;
    axios
      .put(resourceToUpdate, car, config)
      .then((response) => {
        setShowModalUpdate(false);
        setNewCar({ name: "", description: "" });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const urlRequest = "https://carscollectionchallenge.azurewebsites.net/Item";
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("idToken")}` },
    };

    axios.get(urlRequest, config).then((response) => {
      setListCar(response.data);
    });
  }, []);

  let content = null;

  if (listCar) {
    content = (
      <Container className="text-center">
        <br />
        <Button color="primary" onClick={showModalSave}>
          Save new colleccion
        </Button>
        <br />
        <br />

        <Table>
          <thead className="text-left">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listCar.map((elemento, key) => (
              <tr className="text-left" key={key}>
                <td>{elemento.name}</td>
                <td>{elemento.description}</td>
                <td>
                  <Link to={`/car/${elemento.id}`}>
                    <Button color="success" style={{ marginRight: "5px" }}>
                      View
                    </Button>
                  </Link>
                  <Button
                    color="warning"
                    style={{ marginRight: "5px" }}
                    onClick={() => getUpdateCar(elemento)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    style={{ marginRight: "5px" }}
                    onClick={() => deleteCar(elemento.id)}
                  >
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
      <ModalCreate
        showModal={showModal}
        handleChange={handleChange}
        saveNewCar={saveNewCar}
        closeModalSave={closeModalSave}
        carName={car.name}
        carDescription={car.description}
      ></ModalCreate>

      <ModalUpdate
        showModalUpdate={showModalUpdate}
        closeModalUpdate={closeModalUpdate}
        handleChange={handleChange}
        carName={car.name}
        carDescription={car.description}
        updateCar={updateCar}
      ></ModalUpdate>

     
      {content}
    </div>
  );
}

export default Home;
