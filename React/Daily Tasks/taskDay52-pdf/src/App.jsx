import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Sample from './components/Sample'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Sample/>
      <ToastContainer position='bottom-left' autoClose={2000} theme='colored'/>
    </>
  )
}

export default App
