import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import { throttle } from 'lodash';
import { saveState } from './localStorage';

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  store.subscribe(
    throttle(() => {
      saveState({
        todoReducer: store.getState().todoReducer
      });
    }, 1000)
  );

  return store;
}
