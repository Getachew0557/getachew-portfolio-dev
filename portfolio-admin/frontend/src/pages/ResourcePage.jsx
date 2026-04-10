import React, { useEffect, useState } from 'react'
import api from '../api'
import Modal from '../components/Modal'

const resourceConfig = {
  projects:       { emoji: '🚀', primaryKey: 'title',       secondaryKey: 'description' },
  experiences:    { emoji: '💼', primaryKey: 'title',       secondaryKey: 'company' },
  educations:     { emoji: '🎓', primaryKey: 'title',       secondaryKey: 'institution' },
  certifications: { emoji: '📜', primaryKey: 'name',        secondaryKey: 'institution' },
  skills:         { emoji: '🛠', primaryKey: 'name',        secondaryKey: 'category' },
  blogs:          { emoji: '✍️', primaryKey: 'title',       secondaryKey: 'tag' },
}

export default function ResourcePage({ resource }) {
  const [items, setItems]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [modal, setModal]       = useState(null)
  const [deleting, setDeleting] = useState(null)
  const config = resourceConfig[resource] || { emoji: '📁', primaryKey: 'title', secondaryKey: '' }

  const fetchItems = async () => {
    setLoading(true)
    try {
      const { data } = await api.get(`/${resource}`)
      setItems(data)
    } catch {}
    setLoading(false)
  }

  useEffect(() => { fetchItems() }, [resource])

  const handleDelete = async id => {
    if (!window.confirm('Delete this item?')) return
    setDeleting(id)
    try {
      await api.delete(`/${resource}/${id}`)
      setItems(prev => prev.filter(i => i._id !== id))
    } catch {}
    setDeleting(null)
  }

  const handleSave = async (formData, id) => {
    try {
      if (id) {
        const { data } = await api.put(`/${resource}/${id}`, formData)
        setItems(prev => prev.map(i => i._id === id ? data : i))
      } else {
        const { data } = await api.post(`/${resource}`, formData)
        setItems(prev => [data, ...prev])
      }
      setModal(null)
    } catch (e) {
      alert('Save failed: ' + (e.response?.data?.error || e.message))
    }
  }

  const label = resource.charAt(0).toUpperCase() + resource.slice(1)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{config.emoji}</span> {label}
          </h2>
          <p className="text-gray-400 text-sm mt-0.5">{items.length} item{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => setModal({ mode: 'add' })}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
        >
          + Add New
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          <div className="text-5xl mb-4">{config.emoji}</div>
          <p className="text-sm">No {label.toLowerCase()} yet.</p>
          <button
            onClick={() => setModal({ mode: 'add' })}
            className="mt-4 text-orange-400 text-sm hover:text-orange-300 transition-colors"
          >
            Add your first one →
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div key={item._id}
              className="bg-gray-900 border border-gray-800 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 hover:border-gray-700 transition-all duration-200"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="text-gray-600 text-xs w-5 text-right flex-shrink-0">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">
                    {item[config.primaryKey] || '—'}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 truncate">
                    {item[config.secondaryKey] || ''}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => setModal({ mode: 'edit', item })}
                  className="text-xs px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={deleting === item._id}
                  className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all disabled:opacity-50"
                >
                  {deleting === item._id ? '...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <Modal
          resource={resource}
          mode={modal.mode}
          item={modal.item}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
