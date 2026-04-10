import React, { useState } from 'react'

const fields = {
  projects: [
    { key: 'title',       label: 'Title',                          type: 'text' },
    { key: 'description', label: 'Description',                    type: 'textarea' },
    { key: 'github',      label: 'GitHub URL',                     type: 'text' },
    { key: 'live',        label: 'Live URL',                       type: 'text' },
    { key: 'video',       label: 'Video URL',                      type: 'text' },
    { key: 'images',      label: 'Image URLs (comma separated)',   type: 'text' },
    { key: 'tags',        label: 'Tags (comma separated)',         type: 'text' },
    { key: 'order',       label: 'Display Order',                  type: 'number' },
  ],
  experiences: [
    { key: 'title',    label: 'Job Title',              type: 'text' },
    { key: 'company',  label: 'Company',                type: 'text' },
    { key: 'date',     label: 'Date Range',             type: 'text' },
    { key: 'location', label: 'Location',               type: 'text' },
    { key: 'tasks',    label: 'Tasks (one per line)',   type: 'textarea' },
    { key: 'order',    label: 'Display Order',          type: 'number' },
  ],
  educations: [
    { key: 'title',       label: 'Degree Title',    type: 'text' },
    { key: 'institution', label: 'Institution',     type: 'text' },
    { key: 'date',        label: 'Date',            type: 'text' },
    { key: 'description', label: 'Description',    type: 'textarea' },
    { key: 'order',       label: 'Display Order',  type: 'number' },
  ],
  certifications: [
    { key: 'name',        label: 'Certificate Name', type: 'text' },
    { key: 'institution', label: 'Institution',      type: 'text' },
    { key: 'logo',        label: 'Logo URL',         type: 'text' },
    { key: 'link',        label: 'Certificate Link', type: 'text' },
    { key: 'order',       label: 'Display Order',    type: 'number' },
  ],
  skills: [
    { key: 'name',     label: 'Skill Name',  type: 'text' },
    { key: 'category', label: 'Category',    type: 'select', options: ['Data Science', 'Frontend', 'Backend'] },
    { key: 'order',    label: 'Display Order', type: 'number' },
  ],
  blogs: [
    { key: 'title',       label: 'Title',         type: 'text' },
    { key: 'description', label: 'Description',   type: 'textarea' },
    { key: 'link',        label: 'Article URL',   type: 'text' },
    { key: 'tag',         label: 'Tag/Category',  type: 'text' },
    { key: 'date',        label: 'Published Date',type: 'text' },
    { key: 'order',       label: 'Display Order', type: 'number' },
  ],
}

export default function Modal({ resource, mode, item, onSave, onClose }) {
  const resourceFields = fields[resource] || []

  const initForm = () => {
    const f = {}
    resourceFields.forEach(({ key, type }) => {
      if (item?.[key] !== undefined) {
        if (Array.isArray(item[key]))
          f[key] = type === 'textarea' ? item[key].join('\n') : item[key].join(', ')
        else f[key] = item[key]
      } else f[key] = type === 'number' ? 0 : ''
    })
    return f
  }

  const [form, setForm] = useState(initForm)
  const [saving, setSaving] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true)
    const payload = {}
    resourceFields.forEach(({ key, type }) => {
      if (key === 'tasks' && type === 'textarea')
        payload[key] = form[key].split('\n').map(s => s.trim()).filter(Boolean)
      else if ((key === 'images' || key === 'tags') && type === 'text')
        payload[key] = form[key].split(',').map(s => s.trim()).filter(Boolean)
      else if (type === 'number')
        payload[key] = Number(form[key]) || 0
      else payload[key] = form[key]
    })
    await onSave(payload, item?._id)
    setSaving(false)
  }

  const title = resource.slice(0, -1).charAt(0).toUpperCase() + resource.slice(0, -1).slice(1)

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-gray-900 z-10">
          <h3 className="text-white font-semibold">
            {mode === 'add' ? `Add New ${title}` : `Edit ${title}`}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white text-lg transition-colors">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {resourceFields.map(({ key, label, type, options }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  rows={4}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 resize-none transition-colors"
                />
              ) : type === 'select' ? (
                <select
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select...</option>
                  {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={type}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              )}
            </div>
          ))}
          <div className="flex gap-3 pt-2 sticky bottom-0 bg-gray-900 pb-1">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-sm text-gray-400 bg-gray-800 hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
            <button type="submit" disabled={saving}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all disabled:opacity-60"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
