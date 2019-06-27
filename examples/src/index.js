import React, { Component } from "react";
import { render } from "react-dom";
import MobileMultipleSelect from "../../src";
const data = [
  { name: "樱花庄", code: 1 },
  { name: "有罪受", code: 2 },
  { name: "忽然", code: 3 },
  { name: "还给我", code: 4 }
];

class App extends Component {
  state = {
    val:[]
  }
  handleChange = (val)=>{
    console.log("val=====>",val);
    this.setState({val});
  }
  render() {
    return (
      <MobileMultipleSelect
        data={data}
        label="人员名称"
        checkbox
        serviceData={["2", "3"]}
        onChange={this.handleChange}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
