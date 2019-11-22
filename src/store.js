import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import categoryReducer from './reducers/categoryReducer'
import subcategoryReducer from './reducers/subcategoryReducer'
import productReducer from './reducers/productReducer'
import businessReducer from './reducers/businessReducer'
import colorReducer from './reducers/colorReducer'

const reducer = combineReducers ({
    currentUser,
    categoryReducer,
    subcategoryReducer,
    productReducer,
    businessReducer,
    colorReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CreateStore to Initialize the store and pass in reducers and middleware for asynchronous functions when fetching data.
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store