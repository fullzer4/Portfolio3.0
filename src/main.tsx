import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SwitchLanguageProvider } from './contexts/switchlanguage'
import { SwitchThemeProvider } from './contexts/switchtheme'
import { GithubProvider } from './services/apigithub'
import { InstagramProvider } from './services/apiinstagram'
import { LinkedinProvider } from './services/apilinkedin'
import { TwitchProvider } from './services/apitwitch'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <TwitchProvider>
        <InstagramProvider>
          <LinkedinProvider>
            <SwitchThemeProvider>
              <SwitchLanguageProvider>
                <App />
              </SwitchLanguageProvider>
            </SwitchThemeProvider>
          </LinkedinProvider>
        </InstagramProvider>
      </TwitchProvider>
    </GithubProvider>
  </React.StrictMode>
)
