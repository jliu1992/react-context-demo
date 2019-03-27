import React, { Component } from "react";
import { render } from "react-dom";
import AddRemark from "./components/AddRemark";
import RemarkList from "./components/RemarkList";

import "antd/dist/antd.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      remarks: ["1", "2"]
    };
    this.addRemark = this.addRemark.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRemark(remark) {
    const { remarks } = this.state;
    if (remarks.indexOf(remark) !== -1 || !remark) {
      return;
    }
    remarks.push(remark);
    this.setState({ remarks });
  }

  delete(remark) {
    const { remarks } = this.state;
    this.setState({ remarks: remarks.filter(item => item !== remark) });
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <AddRemark addRemark={this.addRemark} />
        <RemarkList remarks={this.state.remarks} delete={this.delete} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
