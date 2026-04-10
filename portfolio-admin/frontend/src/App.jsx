import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ResourcePage from './pages/ResourcePage'
import Layout from './components/Layout'

const PrivateRoute = ({ children }) =>
  localStorage.getItem('admin_token') ? children : <Navigate to="/login" />

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="projects"       element={<ResourcePage resource="projects" />} />
          <Route path="experiences"    element={<ResourcePage resource="experiences" />} />
          <Route path="educations"     element={<ResourcePage resource="educations" />} />
          <Route path="certifications" element={<ResourcePage resource="certifications" />} />
          <Route path="skills"         element={<ResourcePage resource="skills" />} />
          <Route path="blogs"          element={<ResourcePage resource="blogs" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
