
import './App.css'
import {BrowserRouter as Router,Routes,Route}from 'react-router'
import Root from './utils/root.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'

function App() {
  

  return (
   <Router>
     <Routes>
      <Route path="/"  element={<Root />}      ></Route>
      <Route path="/admin/dashboard"  element={<ProtectedRoute requireRole={["admin"]} > <h1>sdad</h1></ProtectedRoute>}      ></Route>
      <Route path="/customers/dashboard"  element={<h1>customer dashboard</h1>}  ></Route>
      <Route path="/login"  element={<Login />}  ></Route>
      <Route path="/unauthorized"  element={<p className='font-bold 3xl mt-20 ml-20'>unauthorized</p>}  ></Route>



     </Routes>
   </Router>

  )
}

export default App
