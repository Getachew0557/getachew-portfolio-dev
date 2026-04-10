import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/',               label: 'Dashboard',      emoji: '📊' },
  { to: '/projects',       label: 'Projects',       emoji: '🚀' },
  { to: '/experiences',    label: 'Experience',     emoji: '💼' },
  { to: '/educations',     label: 'Education',      emoji: '🎓' },
  { to: '/certifications', label: 'Certifications', emoji: '📜' },
  { to: '/skills',         label: 'Skills',         emoji: '🛠' },
  { to: '/blogs',          label: 'Blog',           emoji: '✍️' },
]

export default function Layout() {
  const navigate = useNavigate()
  const logout = () => { localStorage.removeItem('admin_token'); navigate('/login') }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full">
        <div className="px-6 py-5 border-b border-gray-800">
          <h1 className="text-white font-bold text-lg">Admin Panel</h1>
          <p className="text-gray-500 text-xs mt-0.5">Getachew Portfolio</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map(({ to, label, emoji }) => (
            <NavLink
              key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              <span>{emoji}</span> {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-200"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main content — offset for fixed sidebar */}
      <main className="flex-1 ml-56 overflow-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
