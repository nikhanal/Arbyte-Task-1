"use client"

import { useContext } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"
import { ThemeContext } from "../../theme/ThemeContext"

interface PostProps {
  title: string
  excerpt: string
  author: string
  date: string
}

const PostPreview = ({ title, excerpt, author, date }: PostProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <article
      className={`
        group relative rounded-3xl p-8 mb-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer
        ${
          theme === "Light"
            ? "bg-white shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-slate-300/80 border border-slate-100"
            : "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-xl shadow-slate-900/60 hover:shadow-2xl hover:shadow-slate-900/80 border border-slate-700"
        }
      `}
    >
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${
            theme === "Light"
              ? "bg-gradient-to-r from-blue-50/50 to-purple-50/50"
              : "bg-gradient-to-r from-blue-900/10 to-purple-900/10"
          }
        `}
      />

      <div className="relative z-10">
        <div className="mb-4">
          <span
            className={`
              inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase
              ${
                theme === "Light"
                  ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
                  : "bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300"
              }
            `}
          >
            Featured
          </span>
        </div>

        <h2
          className={`
            text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300
            ${theme === "Light" ? "text-slate-800" : "text-white"}
          `}
        >
          {title}
        </h2>

        <p
          className={`
            text-lg leading-relaxed mb-6 line-clamp-3
            ${theme === "Light" ? "text-slate-600" : "text-slate-300"}
          `}
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <User size={16} className={theme === "Light" ? "text-slate-500" : "text-slate-400"} />
              <span
                className={`
                  text-sm font-medium
                  ${theme === "Light" ? "text-slate-700" : "text-slate-300"}
                `}
              >
                {author}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} className={theme === "Light" ? "text-slate-500" : "text-slate-400"} />
              <span
                className={`
                  text-sm
                  ${theme === "Light" ? "text-slate-600" : "text-slate-400"}
                `}
              >
                {date}
              </span>
            </div>
          </div>

          <button
            className={`
              group/btn flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
              ${
                theme === "Light"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white shadow-lg shadow-blue-600/25"
              }
              hover:scale-105 hover:shadow-xl
            `}
          >
            <span>Read More</span>
            <ArrowRight size={16} className="duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default PostPreview
