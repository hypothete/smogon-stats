import React, { Component } from "react";
import { connect } from "react-redux";

import { inspectMon } from "../actions/inspectActions";

import { DataUl, DataLi } from './styles';

class DataList extends Component {
  render() {
    const { data, inspectMon, inspected } = this.props;
    return (
      <div>
        <h2>Data</h2>
        <DataUl>
          {data.map(mon => (
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
