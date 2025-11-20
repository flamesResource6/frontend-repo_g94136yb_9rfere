import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', message: 'Thanks! We received your message.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Say hello</h2>
            <p className="mt-2 text-slate-600">We usually reply within a business day.</p>
            <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm">
              <p className="text-sm text-slate-600">Prefer email? support@pastelpay.app</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm">
            <div className="grid gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm">
                {loading ? 'Sending...' : 'Send message'}
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

export default Contact
