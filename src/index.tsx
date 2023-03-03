import { render } from "react-dom"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "app/providers/ThemeProvider"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "shared/ui/ErrorFallback/ErrorFallback"
import "shared/config/internalization/i18n"
import { StoreProvider } from "app/providers/StoreProvider"

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider initialTheme={Theme.LIGHT}>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root"),
)
