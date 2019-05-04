import React, {Component} from 'react';
import { connect } from 'react-redux';

import {removeFromParty} from '../actions/partyActions';

class PartyList extends Component {
  render() {
    const {party, removeFromParty} = this.props;
    return (
      <div>
        <h2>Party</h2>
        <ul>
        {
          party.map(mon => (
            <li key={`party-${mon.name}`}>
              {mon.name}
              <button onClick={() => { removeFromParty(mon); }}>
                Remove
              </button>
            </li>))
        }
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    party: state.party
  };
}

export default connect(mapStateToProps, { removeFromParty })(PartyList);
