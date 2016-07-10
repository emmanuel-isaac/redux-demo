import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  switch (true) {
    case action.type == types.BEGIN_AJAX_CALL:
      return state + 1;
    case /SUCCESS$/.test(action.type) || action.type == types.AJAX_CALL_ERROR:
      return state - 1;
    default:
      return state;
  }
}
