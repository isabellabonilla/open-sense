// main.jsx --> this is the entry point of the app.
// it connects your app component to the HTML page.
// you don’t need to touch this file often, it just boots up the app.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
