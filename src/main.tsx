import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SwitchThemeProvider } from './contexts/switchtheme'
import { GithubProvider } from './services/apigithub'
import { TwitchProvider } from './services/apitwitch'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <TwitchProvider>
        <SwitchThemeProvider>
          <App />
        </SwitchThemeProvider>
      </TwitchProvider>
    </GithubProvider>
  </React.StrictMode>
)
