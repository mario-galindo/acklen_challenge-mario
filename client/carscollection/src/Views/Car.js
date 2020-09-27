import React from "react";
import { useParams } from "react-router-dom";
import { UseAxiosGet } from "../Hooks/HttpRequests";

function Car() {
  const { id } = useParams();
  const url = `https://carscollectionchallenge.azurewebsites.net/Item/${id}`;

  let car = UseAxiosGet(url);
  let content = null;
  console.log(car);

  if (car.loading) {
    content = <p>Loading!!</p>;
  }

  if (car.data) {
    return (content = (
      <div>
        <h1>{car.data[0].name}</h1>
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default Car;
