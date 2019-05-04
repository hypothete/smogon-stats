import React, { Component } from "react";
import { connect } from "react-redux";

import { addToParty } from "../actions/partyActions";
import { toPercent } from "../utils";

import { DataUl, DataLi, TabsWrapper, TabsTab } from "./styles";

function SortedTuple({ label, data, styles }) {
  return (
    <div>
      {label}
      <DataUl styles={styles}>
        {data.map(datum => (
          <DataLi key={datum[0]}>
            {datum[0]}: {datum[1]}
          </DataLi>
        ))}
      </DataUl>
    </div>
  );
}

const tupleProps = ["abilities", "moves", "teammates"];

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
            label={this.state.selectedTuple}
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

  const moves = Object.keys(mon["Moves"])
    .map(moveName => {
      return [moveName, mon["Moves"][moveName]];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });

  const abilities = Object.keys(mon["Abilities"])
    .map(abilityName => {
      return [abilityName, mon["Abilities"][abilityName]];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });

  const teammates = Object.keys(mon["Teammates"])
    .map(teammateName => {
      return [teammateName, mon["Teammates"][teammateName]];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });

  return {
    mon,
    name: mon.name,
    usage: mon.usage,
    moves,
    abilities,
    teammates
  };
};

export default connect(
  mapStateToProps,
  { addToParty }
)(Inspected);
