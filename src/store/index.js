import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import pasbandaraReducer from './reducers/pasbandaraReducers'
import userReducer from './reducers/userReducers'

const reducers = combineReducers({
    pasbandara: pasbandaraReducer,
    auth: authReducer,
    users: userReducer,
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store; 