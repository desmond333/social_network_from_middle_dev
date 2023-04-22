import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { DevSupport } from "@react-buddy/ide-toolbox"
import App from "./app/App"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { Theme } from "@/app/providers/ThemeProvider/lib/ThemeContext"
import { StoreProvider } from "@/app/providers/StoreProvider"
import { ErrorFallback } from "@/g-shared/ui/ErrorFallback/ErrorFallback"
import "@/g-shared/config/internalization/i18n"
import { ComponentPreviews, useInitial } from "@/g-shared/lib/dev"

// сначала идет BrowserRouter так как
// в StoreProvider используется useNavigate()

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider initialTheme={Theme.LIGHT}>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
          >
            <App />
          </DevSupport>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
