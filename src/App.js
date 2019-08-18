import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Test</p>
      </div>
    </Provider>
  );
}

export default App;
