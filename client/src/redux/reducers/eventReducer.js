import { RECORD_EVENT } from '../actions/types';

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECORD_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    default:
      return state;
  }
}
