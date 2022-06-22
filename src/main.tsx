import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import { MenuProvider } from './contexts/menu'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <Rota />
    </MenuProvider>
  </React.StrictMode>
)