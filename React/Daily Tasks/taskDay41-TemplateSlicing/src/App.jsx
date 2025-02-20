import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Layout from './components/layouts/Layout';

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/ >
            <Route path='/contact' element={<Contact/>}/ >
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
