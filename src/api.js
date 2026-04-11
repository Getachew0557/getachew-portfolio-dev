const BASE = import.meta.env.VITE_ADMIN_API_URL || 'http://localhost:5001/api'

export const fetchResource = async (resource) => {
  try {
    const res = await fetch(`${BASE}/${resource}`)
    if (!res.ok) throw new Error('Failed')
    return await res.json()
  } catch (e) {
    console.warn(`[API] Falling back to static data for ${resource}`)
    return null
  }
}
