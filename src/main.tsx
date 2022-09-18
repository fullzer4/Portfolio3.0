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
import { SwitchAcademicProvider } from './contexts/switchacademic'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <TwitchProvider>
        <DiscordProvider>
          <YoutubeProvider>
            <SwitchThemeProvider>
              <SwitchLanguageProvider>
                <SwitchAcademicProvider>
                  <NavbarSelectProvider>
                    <App />
                  </NavbarSelectProvider>
                </SwitchAcademicProvider>
              </SwitchLanguageProvider>
            </SwitchThemeProvider>
          </YoutubeProvider>
        </DiscordProvider>
      </TwitchProvider>
    </GithubProvider>
  </React.StrictMode>
)
