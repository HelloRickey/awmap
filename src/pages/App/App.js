import React, { Component } from "react";
import Home from "../../components/Home/Home";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

     
        <div  className="container">
          <Home ></Home>
        </div>

    );
  }
}
export default App;
