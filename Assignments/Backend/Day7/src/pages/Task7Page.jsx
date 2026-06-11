import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const Task7Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-lg border border-gray-300 bg-white px-5 py-4">
          <p className="text-sm font-semibold text-gray-700">Task 7</p>
          <NavLink className="text-sm font-medium text-gray-700 underline" to="/">
            Back to Home
          </NavLink>
        </header>
        <Header />
        <MainContent />
        <Footer />
      </main>
    </div>
  )
}

export default Task7Page