import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/ >
          <Route path='/contact' element={<Contact/>}/ >
        </Routes>
      </BrowserRouter>
  )
}

export default App
