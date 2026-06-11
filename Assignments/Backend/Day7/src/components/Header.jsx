const Header = () => {
  return (
    <header className="rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-700">Company Logo Text</p>
          <h2 className="text-xl font-bold text-gray-900">Northstar Labs</h2>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header