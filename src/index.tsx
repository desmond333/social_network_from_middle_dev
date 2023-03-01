import { render } from "react-dom"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "app/providers/ThemeProvider"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "shared/ui/ErrorFallback/ErrorFallback"
import "shared/config/internalization/i18n"

render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root"),
)
