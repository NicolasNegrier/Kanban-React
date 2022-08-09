import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import lists from '../middlewares/lists';

const initialState = {list:[]};

export const store = configureStore({
  reducer: rootReducer, 
  initialState, 
  middleware: [lists],
});



// import { createStore, applyMiddleware, compose } from 'redux';

// import reducer from '../reducers';
// import lists from '../middlewares/lists';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(lists),
// );

// const store = createStore(reducer, enhancers);

// export default store;