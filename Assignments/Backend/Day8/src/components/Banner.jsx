import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
]

const Banner = () => {
  const navigate = useNavigate()

  return (
    <header className="border-b border-white/60 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.35em] text-cyan-700">DAY 8</p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            React Router Demo
          </h1>
          <p className="mt-1 max-w-xl text-sm text-slate-600">
            Navigation built with NavLink, plus button-based redirects using useNavigate().
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <nav className="flex flex-wrap items-center gap-2 rounded-full bg-slate-950/5 p-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/20'
                      : 'text-slate-600 hover:bg-white hover:text-slate-950',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="rounded-full border border-cyan-700 px-5 py-2.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-700 hover:text-white"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Banner