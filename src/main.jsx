import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserDataProvider from './context/UserDataContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </StrictMode>,
)
