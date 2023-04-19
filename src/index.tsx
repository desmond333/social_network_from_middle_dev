import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import App from "./app/App"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { Theme } from "@/app/providers/ThemeProvider/lib/ThemeContext"
import { ErrorFallback } from "@/g-shared/ui/ErrorFallback/ErrorFallback"
import "@/g-shared/config/internalization/i18n"
import { StoreProvider } from "@/app/providers/StoreProvider"

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
