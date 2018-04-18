

import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../redux/actionTypes';


let PreConnectedStateful = ({ dispatch }) => {
  return (
    <div>
      <h1>This is a connected dispatch button</h1>
      <button onClick={() => {
      	dispatch({type: ACTION_TYPES.CHANGE_STATE, state:"preConnectedState"})
      }}>click me</button>
    </div>
  )
}

PreConnectedStateful = connect()(PreConnectedStateful);

export default PreConnectedStateful;













