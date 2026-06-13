const About = () => {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">About</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">About this router demo</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        This page exists to prove the NavLink highlighting and route transitions are wired through
        a shared layout. It keeps the app easy to scale when more pages are added later.
      </p>
    </section>
  )
}

export default About