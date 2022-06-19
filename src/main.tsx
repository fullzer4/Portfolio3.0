import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import "./index.css"
import { ApiDiscordProvider } from './contexts/apiDiscord'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApiDiscordProvider>
        <Rota />
      </ApiDiscordProvider>
  </React.StrictMode>
)
