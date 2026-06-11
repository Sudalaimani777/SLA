const MainContent = () => {
  return (
    <main className="grid gap-4 rounded-lg border border-gray-300 bg-white p-5 md:grid-cols-2">
      <article className="rounded-lg border border-gray-200 p-4">
        <p className="text-sm font-semibold text-gray-700">Overview</p>
        <h2 className="mt-2 text-lg font-semibold text-gray-900">Static Assignment Dashboard</h2>
        <p className="mt-2 text-sm text-gray-600">This page uses static content to show layout structure.</p>
      </article>
      <article className="rounded-lg border border-gray-200 p-4">
        <p className="text-sm font-semibold text-gray-700">Focus</p>
        <h2 className="mt-2 text-lg font-semibold text-gray-900">Clean UI Blocks</h2>
        <p className="mt-2 text-sm text-gray-600">Every component is static and fixed.</p>
      </article>
    </main>
  )
}

export default MainContent