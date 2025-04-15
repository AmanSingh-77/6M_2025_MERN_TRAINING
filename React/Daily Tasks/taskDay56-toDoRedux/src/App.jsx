import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddList from './Components/AddList';
import ShowLists from './Components/ShowLists';
import Master from './Components/layouts/Master';
import Home from './Components/Home';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddList/>}/>
            <Route path='/show' element={<ShowLists/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
        <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default App
