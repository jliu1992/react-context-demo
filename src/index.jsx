import React, { Component } from 'react';
import { render } from 'react-dom';
import AddRemark from './components/AddRemark';
import RemarkList from './components/RemarkList';

import RemarkContext from './context/remark';

import 'antd/dist/antd.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      remarks: ['1', '2'],
    };
    this.addRemark = this.addRemark.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRemark(remark) {
    const { remarks } = this.state;
    remarks.push(remark);
    this.setState({ remarks });
  }

  delete(remark) {
    const { remarks } = this.state;
    this.setState({ remarks: remarks.filter(item => item !== remark) });
  }

  render() {
    return (
      <RemarkContext.Provider
        value={{
          remarks: this.state.remarks,
          addRemark: this.addRemark,
          delete: this.delete
        }} >
        <div style={{ margin: 20 }}>
          <AddRemark />
          <RemarkList />
        </div>
      </ RemarkContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
