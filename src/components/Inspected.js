import React, { Component } from "react";
import { connect } from "react-redux";

import { addToParty } from "../actions/partyActions";
import { toPercent } from "../utils";

import { DataUl, DataLi, KeyValWrap, TabsWrapper, TabsTab } from "./styles";

function makeTuplesByUsage(dict) {
  return Object.keys(dict)
    .map(key => {
      return [key, dict[key]];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });
}

function SortedTuple({ data, styles }) {
  return (
    <DataUl styles={styles}>
      {data.map(datum => (
        <DataLi key={datum[0]}>
          <KeyValWrap>
            <span>{datum[0]}</span>
            <span>{datum[1].toFixed(2)}</span>
          </KeyValWrap>
        </DataLi>
      ))}
    </DataUl>
  );
}

const tupleProps = ["abilities", "moves", "teammates", "spreads"];

class Inspected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTuple: "abilities"
    };
    this.selectTuple = this.selectTuple.bind(this);
  }

  selectTuple(prop) {
    this.setState({
      selectedTuple: prop
    });
  }

  render() {
    const { mon, name, usage, addToParty } = this.props;
    if (mon == null) {
      return null;
    }
    return (
      <div>
        <h2>Inspected</h2>
        <div>
          <h3>{name}</h3>
          <button
            onClick={() => {
              addToParty(mon);
            }}
          >
            Add to party
          </button>
          <div>Usage: {toPercent(usage)}</div>
          <TabsWrapper>
            {tupleProps.map(prop => (
              <TabsTab
                key={prop}
                selected={this.state.selectedTuple === prop}
                onClick={() => {
                  this.selectTuple(prop);
                }}
              >
                {prop}
              </TabsTab>
            ))}
          </TabsWrapper>
          <SortedTuple
            data={this.props[this.state.selectedTuple]}
            styles={{ "max-height": "200px" }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const mon = state.inspected;
  if (mon == null) {
    return {
      name: null
    };
  }

  const moves = makeTuplesByUsage(mon["Moves"]);
  const abilities = makeTuplesByUsage(mon["Abilities"]);
  const teammates = makeTuplesByUsage(mon["Teammates"]);
  const spreads = makeTuplesByUsage(mon["Spreads"]);

  return {
    mon,
    name: mon.name,
    usage: mon.usage,
    moves,
    abilities,
    teammates,
    spreads
  };
};

export default connect(
  mapStateToProps,
  { addToParty }
)(Inspected);
