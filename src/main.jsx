import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './provider/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
