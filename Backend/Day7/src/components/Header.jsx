import { Link } from "react-router-dom"

const Header = () => {

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Contact", to: "/contact" }
    ]


    return (
        <>
            <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img src="/images/bird_2.jpg" alt="Bird logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-200" />
                        <h1 className="text-lg font-semibold  text-slate-800">Birdly</h1>
                    </div>

                    <nav className="flex items-center gap-2 sm:gap-3">
                    {
                        navLinks.map(links => (
                            <Link
                                key={links.name}
                                to={links.to}
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-orange-100 hover:text-orange-700"
                            >
                                {links.name}
                            </Link>
                        ))
                    }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header