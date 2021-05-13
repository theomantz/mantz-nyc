import React, { createContext, useReducer } from 'react'
import uiReducer from '../reducers/uiReducer'

const initialState = {
  ui: false,
  dims: {},
  icon: null,
  card: null
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  if( process.env.NODE_ENV !== 'production') {
    console.log(state)
  }
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store