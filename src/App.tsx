import { useEffect } from 'react'
// import './App.css'
import _init from './utils'

function App() {

  useEffect(() => {
    _init()
  }, [])

  return (
    <div className="App">
      <canvas className="main"></canvas>
    </div>
  )
}

export default App
