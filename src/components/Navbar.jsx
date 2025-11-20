import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border border-white/50 shadow-sm">
          <a href="#" className="flex items-center gap-3 pl-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 border border-white/70 shadow-inner" />
            <span className="font-semibold text-slate-800">PastelPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#auth" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow">
              Sign up
            </a>
          </nav>

          <button className="md:hidden p-3" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#auth" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm">
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
