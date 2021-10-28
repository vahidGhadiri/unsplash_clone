import {applyMiddleware, createStore} from "redux";
import createSagaMiddleWare from "redux-saga"


const saga = createSagaMiddleWare()

export const store = createStore(reducer, applyMiddleware(saga))