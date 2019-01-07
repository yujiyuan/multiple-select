import React, { Component } from 'react';

import './App.css';
import MultipleSelect from "./MutipleSelect/MutipleSelect";
const data = [
  { name: '樱花庄', code: 1 },
  { name: '有罪受', code: 2 },
  { name: '忽然', code: 3 },
  { name: '还给我', code: 4 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <MultipleSelect data={data} label="人员名称" checkbox />
      </div>
    );
  }
}

export default App;
