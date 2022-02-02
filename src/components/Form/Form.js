import React, { useState } from "react";

const Form = (props) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2>Get In Touch</h2>
        <h4 className="lead">Have any questions ?. Fill out the form below</h4>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 shadow">
          <form className="mb-3">
            <label className="form-label">Email Address</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-at"></i>
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="eg. example@gmail.com"
              />
            </div>
            <label className="form-label">Name</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="eg. John Doe"
              />
            </div>

            <label className="form-label">What is your question about ?</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-chat-square"></i>
              </span>
              <select
                className="form-select"
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
              >
                <option>Pricing</option>
                <option>Delivery</option>
                <option>Update</option>
              </select>
            </div>
            <label className="form-label">Message</label>
            <textarea className="form-control mb-3" rows="3"></textarea>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={props.showAlert}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
