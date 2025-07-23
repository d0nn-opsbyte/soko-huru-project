import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Products from './components/Products'

function App() {
  const [buyer, setBuyer] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setBuyer={setBuyer}/>} />
        <Route path="/signup" element={<SignUp  setBuyer={setBuyer}/>} />
        <Route path="/products" element={<Products buyer={buyer}/>} />
      </Routes>
    </Router>
  )
}

export default App
