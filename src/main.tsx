import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GithubProvider } from './services/apigithub'
import { TwitchProvider } from './services/apitwitch'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <TwitchProvider>
        <App />
      </TwitchProvider>
    </GithubProvider>
  </React.StrictMode>
)
