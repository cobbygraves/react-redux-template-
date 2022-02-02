import React, { useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert/Alert";
import * as ActionCreators from "./redux/ActionCreators";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

const App = () => {
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        showAlert(false, alert.color, alert.title, alert.message);
      }, [5000]);
    }
  }, [alert.show]);

  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  return (
    <div>
      {/* routing functionalities goes here */}

      <div className="App-Root"></div>
      {/* routing functionalities goes here */}
      <CSSTransition
        in={alert.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="App-Toast"
      >
        <Alert
          title={alert.title}
          color={alert.color}
          message={alert.message}
          closeAlert={() =>
            showAlert(false, alert.color, alert.title, alert.message)
          }
        />
      </CSSTransition>
    </div>
  );
};

export default App;
