import React from "react";

const Accordion = () => {
  return (
    <div className="accordion" id="bookDetails">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Chapter 1 - Your First Web Page
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#bookDetails"
        >
          <div className="accordion-body">
            Lorem deserunt exercitation tempor ipsum ex enim sit. Aliquip do
            ipsum amet est esse exercitation ipsum culpa in aliqua qui. Aliquip
            irure aliquip amet ea elit mollit veniam labore proident
            exercitation. Aute in Lorem in ut ad pariatur ad aliquip laborum
            laborum adipisicing Lorem proident deserunt. Lorem veniam amet nisi
            officia esse do occaecat. Aute laboris Lorem id duis tempor ex
            fugiat irure sunt nisi consequat eu exercitation voluptate.
            Excepteur anim irure minim id occaecat labore aliqua dolore culpa
            deserunt consectetur do tempor commodo.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Chapter 2 - Mastering CSS
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#bookDetails"
        >
          <div className="accordion-body">
            Proident tempor sint ad non consectetur quis sint dolor eiusmod. Non
            consequat duis ullamco non est non. Velit eu voluptate officia in.
            Sint adipisicing qui officia fugiat dolor incididunt nulla
            adipisicing proident. Officia sunt ullamco occaecat Lorem laborum
            sit excepteur culpa. Sint excepteur irure ex non esse est eu aute
            esse ad aliqua irure consequat. Incididunt pariatur aliquip labore
            aliquip nisi et irure.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Chapter 3 - The Power of JavaScript
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#bookDetails"
        >
          <div className="accordion-body">
            Anim irure reprehenderit tempor magna consequat sit dolore proident
            quis elit laborum labore duis do. Dolore id ea nostrud ipsum irure
            ipsum. Nulla non labore veniam sunt cillum magna cillum exercitation
            duis occaecat eiusmod sit velit voluptate. Do eu sit laborum laboris
            ex elit veniam. Excepteur non anim nostrud tempor. Eiusmod consequat
            excepteur eiusmod commodo aliqua magna esse ad nisi nisi nulla
            aliqua.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Chapter 4 - Storing Data(Firebase Database)
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#bookDetails"
        >
          <div className="accordion-body">
            Exercitation consequat reprehenderit officia voluptate proident ea
            nisi excepteur voluptate velit eiusmod. Reprehenderit anim sunt
            ipsum dolore occaecat excepteur irure ipsum consectetur nostrud
            duis. Duis minim esse eu consequat. Culpa occaecat veniam
            exercitation veniam commodo ad adipisicing anim nisi ad duis sint
            dolor non. Culpa mollit amet nisi qui.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Chapter 5 - User Authentication
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#bookDetails"
        >
          <div className="accordion-body">
            Magna tempor Lorem id excepteur do. Fugiat tempor ut id Lorem labore
            magna irure labore ad amet consequat. Culpa ex proident aute ex
            adipisicing dolor irure in.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
