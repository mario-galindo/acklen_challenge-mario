import React from "react";
import { UseAxiosGet } from "../Hooks/HttpRequests";

function Home(props) {
  const url = `https://carscollectionchallenge.azurewebsites.net/Item`;

  let cars = UseAxiosGet(url);
  let content = null;

  if (cars.data) {
    content = cars.data.map((car, key) => (
      <div key={key}>
        <h5>{car.name}</h5>
      </div>
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
