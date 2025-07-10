import { useState } from 'react'
import Counter from './Componant/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-3xl font-bold underline' style={{ backgroundColor: "Red", textAlign: 'center', padding: '10px' }}> welcome to Vite First React App </h2>
      <Counter />
    </>
  )
}

export default App
