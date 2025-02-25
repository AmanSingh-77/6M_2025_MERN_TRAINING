import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './components/User Pages/About'
import Blog from './components/User Pages/Blog'
import Contact from './components/User Pages/Contact'
import Login from './components/Login';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Home from './components/User Pages/Home';
import UserMaster from './components/User Layouts/UserMaster';
import Admin from './components/Admin Pages/Admin';


export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login page */}
          <Route path='/' element={<Login/>}/>
          
          {/* User login */}
          <Route path='/user' element={<UserMaster/>}>
            <Route path='/user' element={<Home/>}/>
            <Route path='/user/about' element={<About/>}/>
            <Route path='/user/blog' element={<Blog/>}/ >
            <Route path='/user/contact' element={<Contact/>}/ >
          </Route>

          {/* Admin Login */}
          <Route path='/admin' element={<Admin/>} />
          
        </Routes>
      </BrowserRouter>

      <ToastContainer position='top-right' theme='dark' autoClose={2000}/>
    </>
      
  )
}
