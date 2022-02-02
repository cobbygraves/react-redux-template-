import React from "react";
// import Classes from './Reviews.module.css'
import ReviewList from "../ReviewList/ReviewList";

const Reviews = () => {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="text-center mb-5">
        <h2>
          <i className="bi bi-stars"></i>
          Books Reviews
        </h2>
        <h4 className="lead">What students say about the book</h4>
      </div>
      <ReviewList />
    </div>
  );
};

export default Reviews;
