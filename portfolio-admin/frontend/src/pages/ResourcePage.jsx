import React, { useEffect, useState } from 'react'
import api from '../api'
import Modal from '../components/Modal'

const resourceConfig = {
  projects:       { emoji: '🚀', primaryKey: 'title',  secondaryKey: 'description' },
  experiences:    { emoji: '💼', primaryKey: 'title',  secondaryKey: 'company' },
  educations:     { emoji: '🎓', primaryKey: 'title',  secondaryKey: 'institution' },
  certifications: { emoji: '📜', primaryKey: 'name',   secondaryKey: 'institution' },
  skills:         { emoji: '🛠', primaryKey: 'name',   secondaryKey: 'category' },
  blogs:          { emoji: '✍️', primaryKey: 'title',  secondaryKey: 'tag' },
}

// Rich card per resource type
function ItemCard({ resource, item, idx, onEdit, onDelete, deleting }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        {/* Index */}
        <span className="text-gray-600 text-xs mt-1 w-5 flex-shrink-0">{idx + 1}</span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {resource === 'projects' && (
            <>
              {/* Images strip */}
              {item.images?.length > 0 && (
                <div className="flex gap-2 mb-3 flex-wrap">
                  {item.images.map((src, i) => (
                    <div key={i} className="w-20 h-14 rounded-lg border border-gray-700 bg-gray-800 overflow-hidden flex items-center justify-center">
                      <img
                        src={src}
                        alt={`img-${i}`}
                        className="w-full h-full object-cover"
                        onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                      />
                      <span style={{display:'none'}} className="text-gray-600 text-xs flex items-center justify-center w-full h-full">🖼</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Video embed preview */}
              {item.video && item.video.includes('youtube.com/embed') && (
                <div className="mb-3 rounded-xl overflow-hidden border border-gray-700" style={{aspectRatio:'16/9', maxWidth: 320}}>
                  <iframe
                    src={item.video}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              )}

              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags?.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                {item.github && <a href={item.github} target="_blank" rel="noreferrer" className="text-xs text-orange-400 hover:underline">GitHub →</a>}
                {item.live   && <a href={item.live}   target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:underline">Live →</a>}
              </div>
            </>
          )}

          {resource === 'experiences' && (
            <>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-orange-400 text-xs font-medium mt-0.5">{item.company}</p>
              <div className="flex gap-3 mt-1">
                <span className="text-gray-400 text-xs">{item.date}</span>
                {item.location && <span className="text-gray-500 text-xs">📍 {item.location}</span>}
              </div>
              <ul className="mt-2 space-y-1">
                {item.tasks?.slice(0, 2).map((t, i) => (
                  <li key={i} className="text-gray-400 text-xs flex gap-1.5"><span className="text-gray-600 mt-0.5">•</span>{t}</li>
                ))}
                {item.tasks?.length > 2 && <li className="text-gray-600 text-xs">+{item.tasks.length - 2} more</li>}
              </ul>
            </>
          )}

          {resource === 'educations' && (
            <>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-orange-400 text-xs font-medium mt-0.5">{item.institution}</p>
              <p className="text-gray-400 text-xs mt-1">{item.date}</p>
              {item.description && <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.description}</p>}
            </>
          )}

          {resource === 'certifications' && (
            <>
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-orange-400 text-xs font-medium mt-0.5">{item.institution}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer"
                  className="inline-block mt-2 text-xs text-cyan-400 hover:underline">
                  View Certificate →
                </a>
              )}
            </>
          )}

          {resource === 'skills' && (
            <div className="flex items-center gap-3">
              {item.icon && (
                <img src={item.icon} alt={item.name}
                  className="w-8 h-8 object-contain rounded-lg border border-gray-700 bg-gray-800 p-0.5"
                />
              )}
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {item.category}
              </span>
            </div>
          )}

          {resource === 'blogs' && (
            <>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <div className="flex gap-3 mt-1">
                {item.tag  && <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">{item.tag}</span>}
                {item.date && <span className="text-gray-500 text-xs">{item.date}</span>}
              </div>
              {item.description && <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.description}</p>}
              {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:underline mt-1 inline-block">Read →</a>}
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={onEdit}
            className="text-xs px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            disabled={deleting}
            className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all disabled:opacity-50"
          >
            {deleting ? '...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ResourcePage({ resource }) {
  const [items, setItems]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [modal, setModal]       = useState(null)
  const [deleting, setDeleting] = useState(null)
  const config = resourceConfig[resource] || { emoji: '📁' }

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
        <div className="space-y-3">
          {items.map((item, idx) => (
            <ItemCard
              key={item._id}
              resource={resource}
              item={item}
              idx={idx}
              onEdit={() => setModal({ mode: 'edit', item })}
              onDelete={() => handleDelete(item._id)}
              deleting={deleting === item._id}
            />
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
