import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default App
