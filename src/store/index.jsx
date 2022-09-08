import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import listSlice from '../reducers/list';
import listsMiddleware from '../middlewares/lists';

export const store = configureStore({
  reducer: {
    lists: listSlice.reducer
  },
  middleware: [listsMiddleware],
});



// import { createStore, applyMiddleware, compose } from 'redux';

// import reducer from '../reducers';
// import lists from '../middlewares/lists';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(lists),
// );

// const store = createStore(reducer, enhancers);

export default store;