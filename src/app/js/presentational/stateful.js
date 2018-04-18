import React from 'react';

const Stateful = ({onClick, val}) => (
  <div>
    <h1>Some Text</h1>
    <button onClick={() => {onClick()}}>{val}</button>
  </div>
)



export default Stateful;
