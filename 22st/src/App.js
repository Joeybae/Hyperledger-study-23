import React, { Component } from "react";
import './App.css';
import styled from "styled-components";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";

class App extends Component {
  state = {
    page: 0
  };
  showPage = no => {
    this.setState({ page: no });
  };
  render() {
    return (
      <div className="App">
        <Menubar showPage={this.showPage} />
        <Page page={this.state.page} />
      </div>
    );
  }
}

export default App;
