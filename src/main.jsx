import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Exemple } from './Exemple'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exemple />
  </StrictMode>,
)
