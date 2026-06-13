const Home = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
          Home Page
        </div>
        <div className="space-y-4">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Navigation, page routing, and button redirects in one clean layout.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Use the top nav to switch between Home, About, and Contact. The banner buttons send
            users to the login and registration flow with useNavigate().
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Router Setup</p>
          <h3 className="mt-3 text-2xl font-bold">Professional folder structure</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Pages stay in pages, shared UI stays in components, and all route definitions live in
            routes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home