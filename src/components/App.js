import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import PartyList from "./PartyList";
import DataLoader from "./DataLoader";
import DataList from "./DataList";
import Inspected from './Inspected';

// Layout
const Columns = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-gap: 20px;
`;

class App extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Smogon Stats</h1>
        <Columns>
          <PartyList />
          {data.length === 0 && <DataLoader />}
          {data.length > 0 && <DataList />}
          <Inspected />
        </Columns>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(App);
