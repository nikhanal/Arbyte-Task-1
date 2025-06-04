"use client"

import { useContext } from "react"
import { ThemeContext } from "../../theme/ThemeContext"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <header
      className={`
        relative overflow-hidden
        ${
          theme === "Light"
            ? "bg-gradient-to-r from-indigo-50 via-white to-cyan-50"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
        }
        px-8 py-6 backdrop-blur-sm
      `}
    >

      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div
            className={`
              w-3 h-8 rounded-full
              ${theme === "Light" ? "bg-gradient-to-b from-blue-500 to-purple-600" : "bg-gradient-to-b from-blue-400 to-purple-500"}
            `}
          />
          <h1
            className={`
              text-3xl font-bold tracking-tight
              ${
                theme === "Light"
                  ? "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent"
              }
            `}
          >
            {siteTitle}
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header