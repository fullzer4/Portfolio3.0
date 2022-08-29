import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SwitchLanguageProvider } from './contexts/switchlanguage'
import { SwitchThemeProvider } from './contexts/switchtheme'
import { GithubProvider } from './services/apigithub'
import { DiscordProvider } from './services/apidiscord'
import { YoutubeProvider } from './services/apiyotube'
import { TwitchProvider } from './services/apitwitch'
import { NavbarSelectProvider } from './contexts/navbarpageselect'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <TwitchProvider>
        <DiscordProvider>
          <YoutubeProvider>
            <SwitchThemeProvider>
              <SwitchLanguageProvider>
                <NavbarSelectProvider>
                  <App />
                </NavbarSelectProvider>
              </SwitchLanguageProvider>
            </SwitchThemeProvider>
          </YoutubeProvider>
        </DiscordProvider>
      </TwitchProvider>
    </GithubProvider>
  </React.StrictMode>
)
