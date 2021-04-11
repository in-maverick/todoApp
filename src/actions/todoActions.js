import {
  SET_TODO_ACTIVE,
  SET_TODO_COMPLETED,
  SET_TODO_TEXT,
  UI_LOADER_HIDE,
  RESET_TODO,
  HASHTAG_TODO_KEYS,
  HASHTAG_TODO_ACTIVE,
  HASHTAG_TODO_COMPLETED,
  HASHTAG_FILTER_TOGGLE,
  ACTIVE_HASHTAG_KEYS
} from './actionTypes';

export const hideLoader = (data) => async (dispatch) => {
  console.log('hideLoader hideLoader ', hideLoader);
  return dispatch({ type: UI_LOADER_HIDE, payload: [] });
};

export const setTODOText = (data) => (dispatch) => {
  console.log('in setTODOText', data);
  return dispatch({ type: SET_TODO_TEXT, payload: data });
};

export const setActiveTODO = (data) => (dispatch) => {
  console.log('in setActiveTODO', data);
  return dispatch({ type: SET_TODO_ACTIVE, payload: data });
};

export const setCompletedTODO = (data) => (dispatch) => {
  console.log('in setCompletedTODO', data);
  return dispatch({ type: SET_TODO_COMPLETED, payload: data });
};

export const resetTODO = () => (dispatch) => {
  return dispatch({ type: RESET_TODO });
};

export const hashTagFilterToggle = (data) => (dispatch) => {
  return dispatch({ type: HASHTAG_FILTER_TOGGLE, payload: data });
};
export const TODOHashTagKeys = (data) => (dispatch) => {
  return dispatch({ type: HASHTAG_TODO_KEYS, payload: data });
};
export const activeHashTagKeys = (data) => (dispatch) => {
  return dispatch({ type: ACTIVE_HASHTAG_KEYS, payload: data });
};
export const hashTagActiveTODO = (data) => (dispatch) => {
  return dispatch({ type: HASHTAG_TODO_ACTIVE, payload: data });
};
export const hashTagCompletedTODO = (data) => (dispatch) => {
  return dispatch({ type: HASHTAG_TODO_COMPLETED, payload: data });
};
