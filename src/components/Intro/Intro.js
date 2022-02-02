import React from "react";
import Book from "../../assets/cyberSecurity.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-5">
          <div className="Intro-Content text-center text-sm-start">
            <p className="display-1 ">Black-Belt</p>
            <p className="display-5 text-muted">Your Coding Skills</p>
            <small className="text-muted">
              This is where you build up your bootstrap fundamentals
            </small>
            <div className="mt-3">
              <button className="btn btn-sm btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <img src={Book} alt="book" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
