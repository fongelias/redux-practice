
import ACTION_TYPES from './actionTypes.js';
const initialState = { state: 'initialState' };

export default function reducer(previous = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.CHANGE_STATE:
      return Object.assign({}, previous, {
        state: action.state,
      });
    default:
      return previous;
  }
}










