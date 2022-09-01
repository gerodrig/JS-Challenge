import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material/styles";

import App from './App'
import './index.css'

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#311d40",
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>
)
