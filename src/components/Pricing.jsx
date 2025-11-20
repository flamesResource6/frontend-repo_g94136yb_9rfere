function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$9',
      period: '/mo',
      features: ['Up to 3 projects', 'Basic analytics', 'Email support'],
      cta: 'Get started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$29',
      period: '/mo',
      features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
      cta: 'Start free trial',
      popular: true,
    },
    {
      name: 'Scale',
      price: '$99',
      period: '/mo',
      features: ['SLA + SSO', 'Custom reports', 'Dedicated manager'],
      cta: 'Contact sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-sky-50/40 to-pink-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Pricing that scales with you</h2>
          <p className="mt-2 text-slate-600">Choose a plan, cancel anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 border shadow-sm backdrop-blur ${t.popular ? 'bg-white border-slate-200 shadow-md' : 'bg-white/80 border-white/60'}`}>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.period}</span>
              </div>
              <h3 className="mt-1 font-semibold text-slate-900">{t.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#auth" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm ${t.popular ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-900'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
