import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

const cards = [
  { label: 'Projects',       resource: 'projects',       to: '/projects',       emoji: '🚀', color: 'from-violet-500 to-indigo-500' },
  { label: 'Experience',     resource: 'experiences',    to: '/experiences',    emoji: '💼', color: 'from-blue-500 to-cyan-500' },
  { label: 'Education',      resource: 'educations',     to: '/educations',     emoji: '🎓', color: 'from-teal-500 to-emerald-500' },
  { label: 'Certifications', resource: 'certifications', to: '/certifications', emoji: '📜', color: 'from-green-500 to-lime-500' },
  { label: 'Skills',         resource: 'skills',         to: '/skills',         emoji: '🛠', color: 'from-orange-500 to-amber-500' },
  { label: 'Blog',           resource: 'blogs',          to: '/blogs',          emoji: '✍️', color: 'from-pink-500 to-rose-500' },
]

export default function Dashboard() {
  const [counts, setCounts] = useState({})

  useEffect(() => {
    cards.forEach(async ({ resource }) => {
      try {
        const { data } = await api.get(`/${resource}`)
        setCounts(prev => ({ ...prev, [resource]: data.length }))
      } catch {}
    })
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-400 text-sm mt-1">Manage all your portfolio content from here</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ label, resource, to, emoji, color }) => (
          <Link key={resource} to={to}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-200 group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            <div className="text-3xl mb-4">{emoji}</div>
            <div className="text-3xl font-bold text-white mb-1">
              {counts[resource] ?? <span className="text-gray-600 text-lg">—</span>}
            </div>
            <div className="text-sm text-gray-400 group-hover:text-white transition-colors">{label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
