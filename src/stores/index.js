import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { venuesReducer } from '../reducers'

let store;
export default {

  initialize: () => {
    const reducers = combineReducers({
      venuesReducer
    })

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }

}
