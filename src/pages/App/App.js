import React, { Component } from "react";
import Hub from "../../components/Hub/Hub";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

     
        <div  className="container">
          <Hub ></Hub>
        </div>

    );
  }
}
export default App;
