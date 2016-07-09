import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateVariant())
  );
}
