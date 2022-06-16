import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuContextProvider } from './contexts/menu'
import Rota from './routes/route'
import "./index.css"
import 'animate.css';
import { ApiDiscordProvider } from './contexts/apiDiscord'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <ApiDiscordProvider>
        <Rota />
      </ApiDiscordProvider>
    </MenuContextProvider>
  </React.StrictMode>
)
