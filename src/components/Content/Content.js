import React from "react";
import EBook from "../../assets/computerSecurity.jpg";
import Accordion from "../Accordion/Accordion";

const Content = () => {
  return (
    <div className="container-lg text-center py-4">
      <h3>Inside the Book</h3>
      <p className="text-muted">A quick glance at the topics you'll learn</p>
      <div className="row my-5 justify-content-around align-items-center">
        <div className="col-8 col-md-4">
          <div className="mb-5">
            <img src={EBook} alt="ebook" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Content;
