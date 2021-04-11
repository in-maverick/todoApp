import {
  HASHTAG_TODO_KEYS,
  RESET_TODO,
  SET_TODO_ACTIVE,
  SET_TODO_COMPLETED,
  SET_TODO_TEXT,
  UI_LOADER_HIDE,
  HASHTAG_TODO_ACTIVE,
  HASHTAG_TODO_COMPLETED,
  HASHTAG_FILTER_TOGGLE,
  ACTIVE_HASHTAG_KEYS
} from 'actions/actionTypes';
import update from 'immutability-helper';
import { uniqBy } from 'lodash';

const initialState = {
  active: [],
  hashTagActive: [],
  hashTagCompleted: [],
  completed: [],
  hashTagKeys: [],
  hashTagFilterToggle: false,
  activeTagKey: [],
  loader: false
};
const resetState = {
  ...initialState
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_LOADER_HIDE: {
      return update(state, {
        $merge: {
          loader: false
        }
      });
    }
    case SET_TODO_TEXT: {
      return update(state, {
        active: { $push: [action?.payload] }
      });
    }
    case SET_TODO_ACTIVE: {
      return update(state, {
        $merge: {
          active: action?.payload
        }
      });
    }
    case SET_TODO_COMPLETED: {
      return update(state, {
        $merge: {
          completed: action?.payload
        }
      });
    }
    case HASHTAG_TODO_KEYS: {
      let uniqueTagsArray = [...new Set([...state.hashTagKeys, action?.payload])];
      uniqueTagsArray = uniqBy(uniqueTagsArray, 'hashTag');
      console.log(' uniqueArray', uniqueTagsArray);
      return update(state, {
        $merge: {
          hashTagKeys: uniqueTagsArray
        }
      });
    }
    case HASHTAG_TODO_ACTIVE: {
      return update(state, {
        $merge: {
          hashTagActive: action?.payload
        }
      });
    }
    case ACTIVE_HASHTAG_KEYS: {
      return update(state, {
        $merge: {
          activeTagKey: action?.payload
        }
      });
    }
    case HASHTAG_TODO_COMPLETED: {
      return update(state, {
        $merge: {
          hashTagCompleted: action?.payload
        }
      });
    }

    case HASHTAG_FILTER_TOGGLE: {
      //const toggleStatus = action?.payload ? !state.hashTagFilterToggle : false;
      let mergingInState = { hashTagFilterToggle: action?.payload };
      if (!action?.payload) {
        mergingInState = {
          ...mergingInState,
          activeTagKey: []
        };
      }
      return update(state, {
        $merge: mergingInState
      });
    }
    case RESET_TODO: {
      return update(state, {
        $merge: resetState
      });
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
