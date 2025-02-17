import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Location from './components/location'
import './App.css'
import Country from './components/Country'
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)
  // Arr of object for ques 1
  
  var products = [
    { pname:"Shirt",
      price:"$100",
      desc:'Very nice product with buttons.'
    },
    { pname:"T-shirt",
      price:"$50",
      desc:'Alright product without buttons.'
    },
    { pname:"Laptop",
      price:"$1000",
      desc:'12gb RAM with 1TB storage. Also has buttons .'
    }
  ]

  return (
    
    <>
      {/* Ques-1 */}
      <h1>Ques-1</h1>
      <ProductDetails products={products} />
      
      {/* Ques-2 */}
      <h1>Ques-2</h1>
      <Location/>
      
      {/* Ques-3 */}
      <h1>Ques-3</h1>
      <Country cname='New Zealand'/>
      <Country cname='Russia'/>
    </>
  )
}

export default App
