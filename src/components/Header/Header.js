import React from "react";
import * as ActionCreators from "../../redux/ActionCreators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  const purchaseBook = () => {
    showAlert(
      true,
      "bg-info",
      "Proceed to payment",
      "Please provide valid payment information"
    );
  };

  return (
    <nav className="sticky-top navbar  navbar-expand-sm navbar-light bg-secondary px-3">
      <a className="navbar-brand fw-bold text-light" href="##">
        Cyber Security
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a
            className="nav-link active text-light"
            aria-current="page"
            href="##"
          >
            About The Book
          </a>
          <a className="nav-link text-light" href="##">
            Reviews
          </a>
          <a className="nav-link text-light" href="##">
            Get in Touch
          </a>
          <button className="btn btn-light" onClick={purchaseBook}>
            buy now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
