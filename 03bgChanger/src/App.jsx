import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState()

  return (
    <>
      <div className='w-full h-screen duration-200 flex flex-col justify-end items-center' style={{backgroundColor: color}}>
        <div className='w-full flex justify-center mb-8'>
          <div className='bg-white bg-opacity-80 rounded-xl shadow-lg p-4 flex gap-4'>
            <button className='px-5 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition cursor-pointer'
            onClick={() => setColor("red")} >Red</button>
            <button className='px-5 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer'
            onClick={() => setColor("blue")}>Blue</button>
            <button className='px-5 py-2 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition cursor-pointer'
            onClick={() => setColor("green")}>Green</button>
            <button className='px-5 py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition cursor-pointer'
            onClick={() => setColor("yellow")}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
