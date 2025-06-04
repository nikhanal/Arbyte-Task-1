"use client"

import { useContext } from "react"
import BlogLayout from "./Layout/BlogLayout"
import { ThemeContext } from "./theme/ThemeContext"
import type { Post } from "./Layout/BlogLayout"

const App = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Introducing Our Brand New Feature",
      excerpt:
        "We're excited to announce our new feature: inline editing with live preview. This revolutionary tool will change how you interact with content, making editing seamless and intuitive. Learn how it works and discover all the possibilities it opens up for your workflow.",
      author: "Jane Doe",
      date: "June 4, 2025",
    },
    {
      id: 2,
      title: "How to Write Reusable React Components",
      excerpt:
        "Dive deep into the art of building highly reusable React components that scale across your entire codebase. We'll explore advanced patterns, best practices, and real-world examples that will transform your development approach.",
      author: "John Smith",
      date: "June 1, 2025",
    },
    {
      id: 3,
      title: "The Art of Prop Passing",
      excerpt:
        "Props are the lifeblood of React applications. Explore advanced patterns including slots, render props, higher-order components, and compound components. Master these techniques to build more flexible and maintainable applications.",
      author: "Alex Lee",
      date: "May 28, 2025",
    },
  ]

  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`
        min-h-screen transition-all duration-500
        ${
          theme === "Light"
            ? "bg-gradient-to-br from-slate-50 via-white to-blue-50"
            : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        }
      `}
    >
      <BlogLayout
        siteTitle="Mini Blog"
        posts={posts}
        footerAuthor="Nishan Khanal"
        footerYear={new Date().getFullYear()}
      />
    </div>
  )
}
export default App
