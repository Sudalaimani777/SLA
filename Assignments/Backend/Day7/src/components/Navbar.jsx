const Navbar = () => {
  return (
    <nav className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-semibold text-gray-700">Nova Studio</span>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700">
        <span>Home</span>
        <span>Work</span>
        <span>Services</span>
        <span>Contact</span>
      </div>
    </nav>
  )
}

export default Navbar