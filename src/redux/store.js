import { compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  return store;
}
