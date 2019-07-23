import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1 className="display-4">Ready?</h1>
    </Provider>
  );
}

export default App;