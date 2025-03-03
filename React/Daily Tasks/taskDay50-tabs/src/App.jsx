import { createContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';

export var cont = createContext()
export default function App() {
  var data = [
      // Components
      {
        title : 'Components',
        desc : 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.',

        syntax : "export default function func_name(props) { }"
      },

      // JSX
      {
        title:'JSX',
        desc: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React.JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements. JSX uses opening and closing tags, attributes, and nested elements. JSX expressions are wrapped in curly braces, { }, and can contain variables available in the context. ',

        syntax: `FileName.jsx`
      },

      // Props
      {
        title: 'Props',
        desc:'Props are arguments passed into React components.Props are passed to components via HTML attributes. Props stands for properties. React Props are like function arguments in JavaScript and attributes in HTML. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.',

        syntax: `function Car(props){ }`

      },

      // Reactjs
      {
        title:'Reactjs',
        desc:'React is a JavaScript library for building user interfaces.React is used to build single-page applications.React allows us to create reusable UI components. React lets you build user interfaces out of individual pieces called components. React components are JavaScript functions.',
        
        syntax: "import React from 'react'"
      },

      // State
      {
        title:'State',
        desc:'React components has a built-in state object.The state object is where you store property values that belong to the component.When the state object changes, the component re-renders. The state object is initialized in the constructor and can contain as many properties as you like.',

        syntax:'let [var,setVar] = useState() '
      }
  ]
  
  return (
    <>
      <cont.Provider value={data}>
        <Home />
      </cont.Provider> 
    </>
  )
}