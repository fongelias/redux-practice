import { connect } from 'react-redux';
import Stateful from '../presentational/stateful';
import ACTION_TYPES from '../redux/actionTypes';


const mapStateToProps = state => {
  return {
    val: state.state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	onClick: () => {
  		dispatch({ 
  			state: "connectedState",
  			type: ACTION_TYPES.CHANGE_STATE,
  		});
  	},
  }
}

const ConnectedStateful = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stateful);

export default ConnectedStateful;









