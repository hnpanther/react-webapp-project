import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Portal from './pages/portal/Portal'
import Dashboard from './pages/portal/Dashboard'
import Profile from './pages/portal/Profile'
import Settings from './pages/portal/Settings'
import ProtectedRoute from './pages/auth/ProtectedRoute'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />

      <Route 
        path="/portal/*"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Portal />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} /> {/* default */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        
      </Route>

      </Routes>
    </Router>
  )
}

export default App
