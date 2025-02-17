import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Students'
import Employee from './components/Employee'
import Zomato from './components/Zomato'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* Ques-1 */}
      <h1>Ques-1</h1>
      <Student/>

      {/* Ques-2 */}
      <h1>Ques-2</h1>
      <Employee/>

      {/* Ques-3 */}
      <h1>Ques-3</h1>
      <Zomato/>
      
    </>
  )
}

export default App
