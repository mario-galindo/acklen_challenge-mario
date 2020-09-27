import React from "react";
import { UseAxiosGet } from "../Hooks/HttpRequests";
import { Link } from "react-router-dom";


function Home(props) {
  const url = `https://carscollectionchallenge.azurewebsites.net/Item`;

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = cars.data.map((car, key) => (
      <Link to={`/car/${car.id}`}>
      <div key={key}>
        <div className="card w-25 mt-3">
          <div className="card-body">
            <h5 className="card-title">{car.name}</h5>
            <p className="card-text">{car.description}</p>
            <a href="/#" className="btn btn-primary">
              Ver
            </a>
          </div>
        </div>
      </div>
      </Link>
    ));
  }

  return (
    <div>
      <h3>Yours Cars</h3>
      {content}
    </div>
  );
}

export default Home;
