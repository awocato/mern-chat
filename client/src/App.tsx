import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Hello Vite + React!</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
