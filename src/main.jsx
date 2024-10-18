import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n'
import { ThemeProvider } from './contexts/theme.jsx'
import reportWebVitals from './reportWebVitals'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </StrictMode>,
)
