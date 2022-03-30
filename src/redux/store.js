import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
//import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index";
//----------------Redux Thunk-------------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore (
    reducers, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // composeEnhancers(applyMiddleware(thunk)),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
//----------------End of Redux Thunk-------------
    // then run the saga
    sagaMiddleware.run(rootSaga)
    
    //const action = type => store.dispatch({type})

    export default store;