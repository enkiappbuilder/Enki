import { createStore, combineReducers, applyMiddleware, } from 'redux'
import { createLogger, } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import sideBar from './sideBar'
import templateChoice from './templateChoice'
import appDetails from './appDetails'
// import composeWithDevTools from 'redux-devtools-extension'

const reducer = combineReducers({
  sideBar,
  appDetails,
  templateChoice
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: false, }))

const store = createStore(reducer, middleware)

export default store