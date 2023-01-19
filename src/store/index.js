import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import pasbandaraReducer from './reducers/pasbandaraReducers'
import userReducer from './reducers/userReducers'
import miscellaneousReducer from './reducers/miscellaneousReducer'
import surveyReducer from './reducers/surveyReducer'

const reducers = combineReducers({
    miscellaneous: miscellaneousReducer,
    pasbandara: pasbandaraReducer,
    auth: authReducer,
    users: userReducer,
    survey: surveyReducer
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store; 