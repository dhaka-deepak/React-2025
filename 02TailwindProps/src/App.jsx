import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Deepak",
    age: 24
  }

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-3xl'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Button Chai"/>
      <Card username="Deepak" btnText="Click Me"/>
        
    </>
  )
}

export default App
