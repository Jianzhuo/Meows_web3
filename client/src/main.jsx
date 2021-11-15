import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { MeowsTokenProvider } from './context/MeowsTokenContext';

ReactDOM.render(
  <MeowsTokenProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MeowsTokenProvider>,
  document.getElementById('root')
)
