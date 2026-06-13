import { Outlet } from 'react-router-dom'
import Banner from './Banner.jsx'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#eff6ff_100%)] text-slate-900">
      <Banner />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout