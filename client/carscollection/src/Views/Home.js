import React from "react";
import axios from "axios";
import { UseAxiosGet } from "../Hooks/HttpRequests";
import ListCard from '../Components/ListCard'

function Home() {
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
    <div className="px-3">
      <h5>Your classis cars</h5>
      {content}
    </div>
  );
}

export default Home;
