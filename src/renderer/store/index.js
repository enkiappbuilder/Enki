import { createStore, combineReducers, applyMiddleware, } from 'redux'
import { createLogger, } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import sideBar from './sideBar'
import templateChoice from './templateChoice'
import appDetails from './appDetails'
import createStatus from './createStatus'
import subMenu from './subMenu'
// import composeWithDevTools from 'redux-devtools-extension'

const reducer = combineReducers({
  sideBar,
  appDetails,
  templateChoice,
  createStatus,
  subMenu
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: false, }))

const store = createStore(reducer, middleware)

export default store
