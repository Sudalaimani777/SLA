import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-md rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Login</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Welcome back</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        This page is the target for the banner Login button, handled with useNavigate().
      </p>

      <form className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
        />
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-sm text-slate-600">
        New here?{' '}
        <Link to="/register" className="font-semibold text-cyan-800 hover:text-cyan-950">
          Create an account
        </Link>
      </p>
    </section>
  )
}

export default Login