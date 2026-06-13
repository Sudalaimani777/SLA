const Contact = () => {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Contact</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Contact page</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        Use this route as the destination for the Contact nav item. If you want a real form here,
        it can be added without changing the routing structure.
      </p>
    </section>
  )
}

export default Contact