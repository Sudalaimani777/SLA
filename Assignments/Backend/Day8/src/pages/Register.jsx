import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-md rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Register</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Create account</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        The Register button in the banner opens this page, and you can keep the flow here or send
        users back to login as needed.
      </p>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
        />
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
          onClick={() => navigate('/login')}
          className="w-full rounded-2xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-slate-600">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-cyan-800 hover:text-cyan-950">
          Login
        </Link>
      </p>
    </section>
  )
}

export default Register