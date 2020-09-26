import React from "react";
import { UseAxiosGet } from "../Hooks/HttpRequests";
import ListCard from "../Components/ListCard";

function Home(props) {
  const url = `https://carscollectionchallenge.azurewebsites.net/Item`;

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = cars.data.map((car, key) => (
      <div key={key}>
        <ListCard name={car.name} year={car.description}></ListCard>
      </div>
    ));
  }

  return (
    <div className=" container px-3">
      <div className="jumbotron" style={{ backgroundColor: "#806cef" }}>
        <h4 className="display-4" style={{ color: "#fff",fontSize:"30px" }}>
          Classic Car Collection Tracker
        </h4>
        <p className="lead" style={{ color: "#fff" }}>
          This tool is designed for all{" "}
          <strong style={{ fontWeight: "bold" }}>Ackleners</strong> for register
          and share classic cars collections
        </p>
        <hr className="my-4" style={{ backgroundColor: "#fff" }} />
        <p >
          <h5>
            <strong style={{ color: "#fff" }}>Summary Collection</strong>
          </h5>
          <div className="row">
            <div
              className="card mt-3 mr-5"
              style={{ width: "18em", height: "7em" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center">Total Cars</h5>

                <p className="card-text text-center">
                  <h1 style={{ color: "#806cef" }}>5</h1>
                </p>
              </div>
            </div>
            <div className="card mt-3" style={{ width: "18em", height: "7em" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Total Brand</h5>

                <p className="card-text text-center">
                  <h1 style={{ color: "#806cef" }}>3</h1>
                </p>
              </div>
            </div>
          </div>
        </p>
      </div>
      <h5 style={{ color: "#806cef" }}>
        <strong>Classic car brands of your friends</strong>
        <ul className="list-group list-group-horizontal mt-3">
          <li className="list-group-item">Ford</li>
          <li className="list-group-item">Chevy</li>
          <li className="list-group-item">Ferrari</li>
          <li className="list-group-item">Toyota</li>
        </ul>
      </h5>
      {content}
    </div>
  );
}

export default Home;
