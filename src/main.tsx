import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuContextProvider } from './contexts/menu'
import Rota from './routes/route'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <Rota />
    </MenuContextProvider>
  </React.StrictMode>
)
