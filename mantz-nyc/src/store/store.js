import React, { createContext, useReducer } from 'react'
import uiReducer from '../reducers/uiReducer'
import {
  CONDENSED
} from '../reducers/uiReducer'

const initialState = {
  ui: CONDENSED
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store