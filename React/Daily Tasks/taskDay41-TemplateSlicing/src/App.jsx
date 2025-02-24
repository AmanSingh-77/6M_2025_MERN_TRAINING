import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Layout from './components/layouts/Layout';
import Login from './components/Login';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/user' element={<Layout/>}>
            <Route path='/user/about' element={<About/>}/>
            <Route path='/user/blog' element={<Blog/>}/ >
            <Route path='/user/contact' element={<Contact/>}/ >
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
