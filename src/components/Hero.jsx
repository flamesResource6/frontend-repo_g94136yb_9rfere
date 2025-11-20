import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-28 sm:py-36">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 border border-white/60 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Simple, modern, pastel-fintech design
              </div>
              <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
                Clean SaaS to manage your digital payments
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Streamline subscriptions, payouts, and analytics in one minimalist workspace.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#pricing" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm shadow-sm hover:shadow-md">View pricing</a>
                <a href="#features" className="inline-flex items-center rounded-xl bg-white/80 backdrop-blur px-5 py-3 text-sm text-slate-900 border border-white/60 shadow-sm">See features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
    </section>
  )
}

export default Hero
