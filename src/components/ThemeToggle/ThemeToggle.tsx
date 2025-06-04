"use client"

import { useContext } from "react"
import { Lightbulb } from "lucide-react"
import { ThemeContext } from "../../theme/ThemeContext"

const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={changeTheme}
      className={`
        relative p-3 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-12
        ${
          theme === "Light"
            ? "bg-gradient-to-br from-amber-100 to-orange-200 text-amber-700 shadow-lg shadow-amber-200/50"
            : "bg-gradient-to-br from-slate-700 to-slate-800 text-amber-400 shadow-lg shadow-slate-900/50"
        }
      `}
      aria-label={`Switch to ${theme === "Light" ? "dark" : "light"} theme`}
    >
      <Lightbulb
        size={22}
        className={`
          relative z-10 transition-all duration-300
          ${theme === "Light" ? "fill-amber-500 drop-shadow-sm" : "fill-amber-400 drop-shadow-glow"}
        `}
      />
      {theme === "Dark" && <div className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-pulse" />}
    </button>
  )
}

export default ThemeToggle
