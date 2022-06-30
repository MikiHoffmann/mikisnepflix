import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { languageReducer, initialState } from "./language/language.reducer";

const store = createStore(
  languageReducer,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
