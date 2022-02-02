import React from "react";

const PriceCard = (props) => {
  return (
    <div className="card border-0 text-center p-4 my-3">
      <div className="card-body">
        <h5 className="card-title">{props.edition}</h5>
        <p className="text-muted card-subtitle">ebook download only</p>
        <p className="display-4 text-primary">${props.price}</p>
        <p className="text-muted">{props.description}</p>
        <button className="btn btn-outline-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default PriceCard;
