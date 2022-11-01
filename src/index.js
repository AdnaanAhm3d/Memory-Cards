import React from 'react'
import ReactDOM from 'react-dom'
import DefaultContextProvider from './Context/DefaultContext'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <DefaultContextProvider>
      <App />
    </DefaultContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
