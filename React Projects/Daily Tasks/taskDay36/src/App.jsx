import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import Employee from './components/Employee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Employee/>
      <Employee/>
      <Employee/>

      <Student/>
      <Student/>
    </>
  )
}

export default App
