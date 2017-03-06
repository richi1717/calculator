import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStoredValue } from '../actions/index';
import NumberPad from './NumberPad';

class Calculator extends Component {
  render () {
    return (
      <div>
        <NumberPad />
      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setStoredValue }, dispatch);
}

export default connect(null, mapDispatchToProps)(Calculator);