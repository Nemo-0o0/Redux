import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhacers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhacers)

export default store;