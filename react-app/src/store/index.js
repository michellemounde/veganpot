import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session';
import bookmarksReducer from './bookmarks';
import commentsReducer from './comments';
import ratingsReducer from './ratings';
import recipesReducer from './recipes';

const rootReducer = ({
  session: sessionReducer,
  bookmarks: bookmarksReducer,
  comments: commentsReducer,
  ratings: ratingsReducer,
  recipes: recipesReducer
});

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const logger = require('redux-logger').default;
      return getDefaultMiddleware().concat(logger)
    } else {
      return getDefaultMiddleware();
    }
  },
  preloadedState
})

export default store;
