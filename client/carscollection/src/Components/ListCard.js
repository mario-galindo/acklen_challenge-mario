import React from "react";

function ListCard(props) {
  return (
    <div className="card w-25">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.year}.
        </p>
        <a href="/#" className="btn btn-success">
          See
        </a>
      </div>
    </div>
  );
}

export default ListCard;
