import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {rootReducer} from "./reducers";


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)


