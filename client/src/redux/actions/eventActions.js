import { RECORD_EVENT } from './types';

// Load User
export const recordEvent = (data) => async (dispatch) => {
  try {
    dispatch({
      type: RECORD_EVENT,
      payload: data,
    });
  } catch (err) {
    console.log('error');
  }
};
