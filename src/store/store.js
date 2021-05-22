import React, { createContext, useReducer } from 'react'
import uiReducer from '../reducers/uiReducer'

const initialState = {
  ui: false,
  dims: {},
  icon: false,
  card: false
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