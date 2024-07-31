import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "hassan",
    age: 24
  }
  
  return (
    <>
      <h1 className='bg-green-400 text-black-400 rounded-xl mb-6'>tailwindtest</h1>
      <Card username="hassan ahmad" btnText="View Profile here →"/>
      <Card username="DamrOo"  btnText="from Profile here →"></Card>

    </>
  )
}

export default App
