import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from './components/Students'
import Employee from './components/Employee'
import Zomato from './components/Zomato'
import Home from './components/Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/students' element={<Student />} />
        <Route path='/zomato' element={<Zomato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
