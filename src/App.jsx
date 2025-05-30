import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";
import { StarBackground } from "./components/StarBackground";
import { LightThemeBackground } from "./components/LightThemeBackground";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {theme === 'light' ? <LightThemeBackground /> : <StarBackground />}
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
