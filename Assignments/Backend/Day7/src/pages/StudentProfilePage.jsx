import { NavLink } from 'react-router-dom'
import StudentProfile from '../components/StudentProfile'

const StudentProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray-300 bg-white px-5 py-4">
          <p className="text-sm font-semibold text-gray-700">Task 1 Student Profile</p>
          <NavLink className="text-sm font-medium text-gray-700 underline" to="/">
            Back to Home
          </NavLink>
        </header>
        <div className="flex justify-center">
          <StudentProfile />
        </div>
      </main>
    </div>
  )
}

export default StudentProfilePage