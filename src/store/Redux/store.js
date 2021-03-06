import "regenerator-runtime/runtime";
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // redux devtools
    const composeEnhancers =
        (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return {
        ...createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run(rootSaga),
    };
};

export default configureStore;
