import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import textReducer from './text.slice';
import { transformText } from './middlewares';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export default configureStore({
  middleware: () => middleware.concat(transformText),
  reducer: {
    text: textReducer,
  },
});
