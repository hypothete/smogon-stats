import React, { Component } from "react";
import { connect } from "react-redux";

import { loadData } from "../actions/dataActions";

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.readFileToStore = this.readFileToStore.bind(this);
  }

  readFileToStore(evt) {
    this.setState({
      error: ""
    });

    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const readText = e.target.result;
      const data = JSON.parse(readText);
      this.props.loadData(data);
    };
    reader.readAsText(file);
  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.readFileToStore} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { loadData }
)(DataLoader);
