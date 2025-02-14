import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import ContactCard from './components/ContactCard'
import Weather from './components/Weather'
import DivCss from './components/DivCss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* Ques-1 */}
      <>
      <h1>Q1 - Shopping Cart</h1>
      <Cart itemName="Jeans" itemPrice="$1200" itemQuantity="3"/>
      <Cart itemName="Shirt" itemPrice="$800" itemQuantity="5"/>
      </>
      
      {/* Ques-2 */}
      <>
      <h1>Q-2 - Product Card</h1>
      <ProductCard productName="Mobile" productPrice="$2000" productDesc=" This little item here will help you to not only put your career in jeopardy but will also assist you on wasting your time ;)"/>
      <ProductCard productName="Laptop" productPrice="$5000" productDesc=" This item on the other hand might be a little useful(let's say to code) but c'mon, who are we kidding. We all what's gonna happen."/>
      <ProductCard productName="Shoes" productPrice="$800" productDesc=" Well, put them on and go outside your home to spend off your day doing nothing, maybe a bit of sports if you feel happy :)"/>
      </>
      
      {/* Ques-3 */}
      <>
        <h1>Q-3 Contact Card</h1>
        <ContactCard contactName="Aman" phn="9876543210" email="aman@gmail.com" />
        <ContactCard contactName="Shruti" phn="1234567890" email="shruti@gmail.com" />
        <ContactCard contactName="Sam" phn="9374281938" email="sam@gmail.com" />
        <ContactCard contactName="Muskan" phn="8764810382" email="muskan@gmail.com" />
      </>

      {/* Ques-4 */}
      <>
        <h1>Q-4 Weather Information</h1>
        <Weather city='Jalandhar' temp='28 &deg;C' humidity='70%' weather='Sunny'/>
        <Weather city='Delhi' temp='25 &deg;C' humidity='20%' weather='Cloudy'/>
        <Weather city='Mumbai' temp='19 &deg;C' humidity='90%' weather='Rainy'/>
      </>

      {/* Ques-5 */}
      <>
        <h1>Q-5 Div using all methods of CSS</h1>
        <DivCss/>
      </>
    </>
  )
}

export default App
