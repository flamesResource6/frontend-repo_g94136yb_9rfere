import { useEffect, useState } from 'react'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-pink-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">From the blog</h2>
          <p className="mt-2 text-slate-600">Latest stories and updates.</p>
        </div>

        {loading ? (
          <p className="mt-10 text-slate-500">Loading...</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.id || p.slug} className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-sky-100 via-pink-100 to-violet-100 border border-white/70" />
                <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{p.excerpt}</p>
                <div className="mt-4 text-xs text-slate-500">{p.author || 'Team'}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
