import {Link} from "react-router-dom"

const Header = () => {

    const navLinks = [
        {name:"Introduction", to:"/"},
        {name:"Mutating Methods", to:"mutatingmethods"},
        {name:"Transform Methods", to:"transformmethods"},
        {name:"Search Methods", to:"searchmethods"},
        {name:"Reduce Methods", to:"reducemethods"},
        {name:"Order Methods", to:"ordermethods"},
        {name:"Create Methods", to:"createmethods"},
    ]

  return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <Link
                    to="/"
                    className="inline-flex w-fit items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                    Array Methods
                </Link>

                <div className="flex flex-wrap gap-2 sm:gap-3 lg:justify-end">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
  )
}

export default Header