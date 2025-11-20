function Features() {
  const features = [
    {
      title: 'Transparent pricing',
      desc: 'Simple plans with no surprises, designed for every stage.',
    },
    {
      title: 'Secure by default',
      desc: 'Best practices and encryption to protect your business.',
    },
    {
      title: 'Analytics you understand',
      desc: 'Clear dashboards and reports without the noise.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Made to feel light</h2>
          <p className="mt-2 text-slate-600">Soft pastels, strong infrastructure.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 border border-white/70 shadow-inner" />
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
