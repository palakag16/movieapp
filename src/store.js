import { createStore,applyMiddleware,compose } from "redux";
import { reducers } from "./redux/reducers";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_||compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;