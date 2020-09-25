import React from "react";
import axios from "axios";
import { UseAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://secureapi-galindo.azurewebsites.net/Item`;

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = cars.data.map((car, key) => (
      <div key={key}>
        <h2>{car.name}</h2>
      </div>
    ));
  }

  return (
    <div className="px-3">
      <h5>Your classis cars</h5>
      {content}
    </div>
  );
}

export default Home;
