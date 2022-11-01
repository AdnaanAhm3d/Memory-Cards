import { useState, createContext, useRef } from 'react'

export const DefaultContext = createContext()

function DefaultContextProvider(props) {
  const [state, setState] = useState(false)
  const [border, setBorder] = useState(false)

  return (
    <DefaultContext.Provider
      value={{
        state,
        setState,
        border,
        setBorder,
      }}
    >
      {props.children}
    </DefaultContext.Provider>
  )
}
export default DefaultContextProvider
