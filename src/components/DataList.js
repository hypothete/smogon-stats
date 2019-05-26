import React, { Component } from "react";
import { connect } from "react-redux";

import { inspectMon } from "../actions/inspectActions";

import { DataUl, DataLi } from "./styles";

class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(evt) {
    this.setState({
      search: evt.target.value.toLowerCase()
    });
  }

  render() {
    const { data, inspectMon, inspected } = this.props;
    const filteredData = data.filter(mon => {
      const lowMon = mon.name.toLowerCase();
      return lowMon.indexOf(this.state.search) > -1;
    });
    return (
      <div>
        <h2>Data</h2>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
          placeholder="filter by name"
        />
        <DataUl>
          {filteredData.map(mon => (
            <DataLi
              key={`data-${mon.name}`}
              inspected={inspected && inspected.name === mon.name}
              onClick={evt => {
                evt.stopPropagation();
                inspectMon(mon);
              }}
            >
              {mon.name}
            </DataLi>
          ))}
        </DataUl>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    inspected: state.inspected
  };
};

export default connect(
  mapStateToProps,
  { inspectMon }
)(DataList);
