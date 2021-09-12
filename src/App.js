import React from "react";
import { Component } from "react";
import "./styles/App.css";
import Form from "./components/Form.js";
import Overview from "./components/Overview";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cv: {},
    };
    this.submitCV = this.submitCV.bind(this);
  }

  async submitCV(info) {
    await this.setState({ cv: info });
    console.log(this.state.cv);
  }

  render() {
    return (
      <div>
        <Form submitCV={this.submitCV} />
        <Overview cvInfo={this.state.cv} />
      </div>
    );
  }
}
