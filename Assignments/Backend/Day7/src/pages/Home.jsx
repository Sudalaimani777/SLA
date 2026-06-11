import { NavLink } from 'react-router-dom'

const taskLinks = [
  { to: '/student-profile', label: 'Student Profile' },
  { to: '/employee-card', label: 'Employee Card' },
  { to: '/product-card', label: 'Product Card' },
  { to: '/movie-details', label: 'Movie Details' },
  { to: '/company-info', label: 'Company Info' },
  { to: '/task-6', label: 'Task 6' },
  { to: '/task-7', label: 'Task 7' },
  { to: '/task-8', label: 'Task 8' },
]

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-lg border border-gray-300 bg-white p-6">
          <h1 className="mt-2 text-3xl font-bold text-center">React Assignment</h1>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {taskLinks.map((task) => (
            <NavLink
              key={task.to}
              to={task.to}
              className={({ isActive }) =>
                `rounded-lg border px-4 py-3 text-center text-sm font-medium transition ${isActive ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'}`
              }
            >
              {task.label}
            </NavLink>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home