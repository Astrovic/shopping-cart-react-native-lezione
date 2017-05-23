import { LOAD_ITEMS, INCREASE_QUANTITY } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return action.payload.items || [];
    case INCREASE_QUANTITY:
      return {
        conto: state.total || 0
      };
    default:
      return state;
  }
};
