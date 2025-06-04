import { useContext } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PostPreview from "../components/PostPreview/PostPreview"
import { ThemeContext } from "../theme/ThemeContext"

export interface Post {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
}

export interface BlogLayoutProps {
  siteTitle: string
  posts: Post[]
  footerAuthor: string
  footerYear: number
}

const BlogLayout = ({ siteTitle, posts, footerAuthor, footerYear }: BlogLayoutProps) => {
    const {theme} = useContext(ThemeContext)
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className="max-w-5xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h2 className={`text-4xl font-bold text-center mb-4 ${theme==="Light"?'text-gray-800':'text-white'}`}>
            Latest Articles
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <PostPreview title={post.title} excerpt={post.excerpt} author={post.author} date={post.date} />
            </div>
          ))}
        </div>
      </main>
      <Footer year={footerYear} authorName={footerAuthor} />
    </>
  )
}

export default BlogLayout
