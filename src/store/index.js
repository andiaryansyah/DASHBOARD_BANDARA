import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
 import pasbandaraReducer from './reducers/pasbandaraReducers'

const reducers = combineReducers({
    pasbandara: pasbandaraReducer,
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store;