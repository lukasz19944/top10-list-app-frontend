import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./components/Layout/Header";
import HomePage from "./components/Layout/HomePage";
import AllLists from "./components/List/AllLists";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/allLists" component={AllLists} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
