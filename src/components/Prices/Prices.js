import React from "react";
import PriceCard from "../PriceCard/PriceCard";

const Prices = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="py-4  text-center">
        <h3>Pricing Plans</h3>
        <p className="lead">Choose a pricing plan to suite you</p>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-sm-3">
          <PriceCard
            edition="Starter Edition"
            price="9.99"
            description="Culpa voluptate incididunt irure cupidatat cillum incididunt id."
          />
        </div>
        <div className="col-8 col-sm-3">
          <PriceCard
            edition="Premium Edition"
            price="49.99"
            description="Tempor non dolore enim nulla veniam cupidatat do eiusmod."
          />
        </div>
        <div className="col-8 col-sm-3">
          <PriceCard
            edition="Gold Edition"
            price="99.99"
            description="Duis mollit sit aliquip laboris quis aute consectetur esse Lorem et sint."
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
