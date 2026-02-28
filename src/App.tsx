import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Portal from './pages/Portal'
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
      />

      </Routes>
    </Router>
  )
}

export default App
