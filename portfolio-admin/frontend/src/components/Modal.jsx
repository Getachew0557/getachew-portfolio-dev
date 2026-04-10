import React, { useState, useRef } from 'react'

const fields = {
  projects: [
    { key: 'title',       label: 'Title',         type: 'text' },
    { key: 'description', label: 'Description',   type: 'textarea' },
    { key: 'github',      label: 'GitHub URL',    type: 'text' },
    { key: 'live',        label: 'Live URL',      type: 'text' },
    { key: 'video',       label: 'Video URL',     type: 'text' },
    { key: 'images',      label: 'Images',        type: 'images' },
    { key: 'tags',        label: 'Tags (comma separated)', type: 'text' },
    { key: 'order',       label: 'Display Order', type: 'number' },
  ],
  experiences: [
    { key: 'title',    label: 'Job Title',            type: 'text' },
    { key: 'company',  label: 'Company',              type: 'text' },
    { key: 'date',     label: 'Date Range',           type: 'text' },
    { key: 'location', label: 'Location',             type: 'text' },
    { key: 'tasks',    label: 'Tasks (one per line)', type: 'textarea' },
    { key: 'order',    label: 'Display Order',        type: 'number' },
  ],
  educations: [
    { key: 'title',       label: 'Degree Title',   type: 'text' },
    { key: 'institution', label: 'Institution',    type: 'text' },
    { key: 'date',        label: 'Date',           type: 'text' },
    { key: 'description', label: 'Description',   type: 'textarea' },
    { key: 'order',       label: 'Display Order', type: 'number' },
  ],
  certifications: [
    { key: 'name',        label: 'Certificate Name', type: 'text' },
    { key: 'institution', label: 'Institution',      type: 'text' },
    { key: 'logo',        label: 'Logo',             type: 'image-single' },
    { key: 'link',        label: 'Certificate Link', type: 'text' },
    { key: 'order',       label: 'Display Order',    type: 'number' },
  ],
  skills: [
    { key: 'name',     label: 'Skill Name',    type: 'text' },
    { key: 'category', label: 'Category',      type: 'select', options: ['Data Science', 'Frontend', 'Backend'] },
    { key: 'icon',     label: 'Icon',          type: 'image-single' },
    { key: 'order',    label: 'Display Order', type: 'number' },
  ],
  blogs: [
    { key: 'title',       label: 'Title',          type: 'text' },
    { key: 'description', label: 'Description',    type: 'textarea' },
    { key: 'link',        label: 'Article URL',    type: 'text' },
    { key: 'tag',         label: 'Tag/Category',   type: 'text' },
    { key: 'date',        label: 'Published Date', type: 'text' },
    { key: 'order',       label: 'Display Order',  type: 'number' },
  ],
}

// Upload image to base64 or return URL
function useImageUpload(onResult) {
  const ref = useRef()
  const trigger = () => ref.current?.click()
  const handleFile = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => onResult(ev.target.result)
    reader.readAsDataURL(file)
    e.target.value = ''
  }
  return { ref, trigger, handleFile }
}

// Single image field (logo, icon)
function ImageSingleField({ value, onChange, label }) {
  const [urlInput, setUrlInput] = useState('')
  const { ref, trigger, handleFile } = useImageUpload(onChange)

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative inline-block">
          <img src={value} alt="preview" className="w-16 h-16 object-contain rounded-lg border border-gray-700 bg-gray-800" />
          <button type="button" onClick={() => onChange('')}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center hover:bg-red-600"
          >✕</button>
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Paste image URL..."
          value={urlInput}
          onChange={e => setUrlInput(e.target.value)}
          className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-orange-500"
        />
        <button type="button"
          onClick={() => { if (urlInput.trim()) { onChange(urlInput.trim()); setUrlInput('') } }}
          className="px-3 py-2 rounded-xl bg-orange-500/20 text-orange-400 text-xs hover:bg-orange-500/30 transition-all"
        >Use URL</button>
        <button type="button" onClick={trigger}
          className="px-3 py-2 rounded-xl bg-gray-700 text-gray-300 text-xs hover:bg-gray-600 transition-all"
        >📁 Upload</button>
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  )
}

// Multiple images field with + button
function ImagesField({ value, onChange }) {
  const [urlInput, setUrlInput] = useState('')
  const { ref, trigger, handleFile } = useImageUpload(url => onChange([...value, url]))

  const addUrl = () => {
    if (urlInput.trim()) { onChange([...value, urlInput.trim()]); setUrlInput('') }
  }
  const remove = idx => onChange(value.filter((_, i) => i !== idx))

  return (
    <div className="space-y-3">
      {/* Image previews */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((src, i) => (
            <div key={i} className="relative group">
              <img src={src} alt={`img-${i}`}
                className="w-20 h-14 object-cover rounded-lg border border-gray-700 bg-gray-800"
              />
              <button type="button" onClick={() => remove(i)}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >✕</button>
              <span className="absolute bottom-0.5 left-1 text-white text-xs font-bold opacity-60">{i + 1}</span>
            </div>
          ))}
        </div>
      )}

      {/* Add image row */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Paste image URL..."
          value={urlInput}
          onChange={e => setUrlInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addUrl())}
          className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-orange-500"
        />
        <button type="button" onClick={addUrl}
          className="w-9 h-9 rounded-xl bg-orange-500 text-white text-lg font-bold flex items-center justify-center hover:bg-orange-600 transition-all flex-shrink-0"
          title="Add URL"
        >+</button>
        <button type="button" onClick={trigger}
          className="px-3 py-2 rounded-xl bg-gray-700 text-gray-300 text-xs hover:bg-gray-600 transition-all flex-shrink-0"
          title="Upload from device"
        >📁</button>
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden"
        onChange={e => {
          const file = e.target.files[0]
          if (!file) return
          const reader = new FileReader()
          reader.onload = ev => onChange([...value, ev.target.result])
          reader.readAsDataURL(file)
          e.target.value = ''
        }}
      />
      {value.length > 0 && (
        <p className="text-gray-600 text-xs">{value.length} image{value.length !== 1 ? 's' : ''} added. Hover to remove.</p>
      )}
    </div>
  )
}

export default function Modal({ resource, mode, item, onSave, onClose }) {
  const resourceFields = fields[resource] || []

  const initForm = () => {
    const f = {}
    resourceFields.forEach(({ key, type }) => {
      if (item?.[key] !== undefined) {
        if (type === 'images') f[key] = Array.isArray(item[key]) ? item[key] : []
        else if (type === 'image-single') f[key] = item[key] || ''
        else if (Array.isArray(item[key]))
          f[key] = type === 'textarea' ? item[key].join('\n') : item[key].join(', ')
        else f[key] = item[key]
      } else {
        if (type === 'images') f[key] = []
        else if (type === 'number') f[key] = 0
        else f[key] = ''
      }
    })
    return f
  }

  const [form, setForm] = useState(initForm)
  const [saving, setSaving] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true)
    const payload = {}
    resourceFields.forEach(({ key, type }) => {
      if (type === 'images' || type === 'image-single') payload[key] = form[key]
      else if (key === 'tasks' && type === 'textarea')
        payload[key] = form[key].split('\n').map(s => s.trim()).filter(Boolean)
      else if (key === 'tags' && type === 'text')
        payload[key] = form[key].split(',').map(s => s.trim()).filter(Boolean)
      else if (type === 'number') payload[key] = Number(form[key]) || 0
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

              {type === 'images' ? (
                <ImagesField value={form[key]} onChange={val => set(key, val)} />
              ) : type === 'image-single' ? (
                <ImageSingleField value={form[key]} onChange={val => set(key, val)} label={label} />
              ) : type === 'textarea' ? (
                <textarea rows={4} value={form[key]}
                  onChange={e => set(key, e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 resize-none transition-colors"
                />
              ) : type === 'select' ? (
                <select value={form[key]} onChange={e => set(key, e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select...</option>
                  {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={type} value={form[key]}
                  onChange={e => set(key, e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              )}
            </div>
          ))}

          <div className="flex gap-3 pt-2 sticky bottom-0 bg-gray-900 pb-1">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-sm text-gray-400 bg-gray-800 hover:bg-gray-700 transition-all"
            >Cancel</button>
            <button type="submit" disabled={saving}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all disabled:opacity-60"
            >{saving ? 'Saving...' : 'Save'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
