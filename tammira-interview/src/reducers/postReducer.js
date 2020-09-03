import { FETCH, NEW } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        items: action.data
      };
    case NEW:
      return {
        ...state,
        item: action.data
      };
    default:
      return state;
  }
}
