import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { MeowsProvider } from './context/MeowsContext';

ReactDOM.render(
  <MeowsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MeowsProvider>,
  document.getElementById('root')
)
