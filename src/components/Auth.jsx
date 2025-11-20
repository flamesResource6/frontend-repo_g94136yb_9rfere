import { useState } from 'react'

function Auth() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', message: 'Welcome aboard! Account created.' })
      setForm({ name: '', email: '', password: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Start your free trial</h2>
            <p className="mt-2 text-slate-600">No credit card needed.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm">
            <div className="grid gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm">
                {loading ? 'Creating...' : 'Create account'}
              </button>
              {status && (
                <div className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{status.message}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Auth
