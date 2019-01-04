import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;
