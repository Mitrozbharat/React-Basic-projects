import { useState } from 'react';
import './App.css';

function App() {
  let [Color, setcolor] = useState("violet");
  let defaultcolor = Color;

  return (
    <>
      <div div style={{ width: '100%', height: '100vh', backgroundColor: defaultcolor }}>
        < h2 className='text-3xl font-bold underline' style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px' }}> welcome to Vite First React App </h2 >

        <div className='flex justify-center items-center h-96'>

          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl  font-bold mb-4 ' style={{ padding: 200 }}>Change Background Color</h1>

            <div className='flex space-x-4 space-y-4 flex-wrap justify-center items-center'>
              <button className='bg-red-500 text-white px-4 py-2 rounded btn' onClick={() => setcolor("red")}>Red</button>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => setcolor("green")}>Green</button>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setcolor("blue")}>Blue</button>
              <button className='bg-yellow-500 text-white px-4 py-2 rounded' onClick={() => setcolor("yellow")}>Yellow</button>
              <button className='bg-purple-500 text-white px-4 py-2 rounded' onClick={() => setcolor("violet")}>Violet</button>
            </div>
          </div>
        </div ></div>

    </>
  )
}

export default App
