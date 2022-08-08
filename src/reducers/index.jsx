import { combineReducers } from 'redux';

import listReducer from './list';
import cardReducer from './card';

const rootReducer = combineReducers({
  list: listReducer,
  card: cardReducer,
});

export default rootReducer;