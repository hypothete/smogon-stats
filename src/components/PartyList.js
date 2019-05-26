import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromParty } from "../actions/partyActions";

import { DataUl, DataLi, KeyValWrap } from "./styles";

class PartyList extends Component {
  render() {
    const { party, synergy, removeFromParty } = this.props;
    return (
      <div>
        <h2>Party</h2>
        <DataUl>
          {party.map(mon => (
            <DataLi key={`party-${mon.name}`}>
              <KeyValWrap>
                <span>{mon.name}</span>
                <span>{synergy[mon.name]}</span>
                <button
                  onClick={() => {
                    removeFromParty(mon);
                  }}
                >
                  X
                </button>
              </KeyValWrap>
            </DataLi>
          ))}
        </DataUl>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const partyNames = state.party.map(mon => mon.name);
  const synergy = state.party.reduce((acc, mon) => {
    partyNames.forEach(pName => {
      if (pName !== mon.name) {
        acc[pName] = acc[pName] || 0;
        acc[pName] += mon['Teammates'][pName] || 0;
      }
    });
    return acc;
  }, {});
  return {
    party: state.party,
    synergy
  };
};

export default connect(
  mapStateToProps,
  { removeFromParty }
)(PartyList);
