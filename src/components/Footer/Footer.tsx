"use client"
import { useContext } from "react"
import { ThemeContext } from "../../theme/ThemeContext"

const Footer = ({ year, authorName }: { year: number; authorName: string }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer
      className={`
        relative overflow-hidden mt-16
        ${
          theme === "Light"
            ? "bg-gradient-to-r from-slate-50 via-white to-slate-50"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
        }
        px-8 py-12
      `}
    >
      <div className="relative z-10 text-center">
        <p
          className={`
            text-sm font-medium mb-2
            ${theme === "Light" ? "text-slate-700" : "text-slate-300"}
          `}
        >
          © {year} {authorName}. All rights reserved.
        </p>

        <div
          className={`
            w-24 h-1 mx-auto rounded-full
            ${theme === "Light" ? "bg-gradient-to-r from-blue-400 to-purple-500" : "bg-gradient-to-r from-blue-500 to-purple-600"}
          `}
        />
      </div>
    </footer>
  )
}

export default Footer