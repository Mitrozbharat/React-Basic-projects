import 'bootstrap/dist/css/bootstrap.min.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false)
  const passref = useRef(null);

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'
    let numbers = '0123456789'
    let password = ''

    if (includeNumbers) {
      str += numbers
    }
    if (includeSpecialChars) {
      str += specialChars;
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      password += str.charAt(char)
    }
    setPassword(password)

  }, [length, includeNumbers, includeSpecialChars, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passref.current?.select()
    passref.current.setSelectionRange(0, password.length) // For mobile devices
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeSpecialChars, generatePassword])

  return (
    <>
      <div className=' max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg'>

        <h1 className=' text-center  fs-4'> Password Generater </h1>

        <div className='card'>
          <div className='card-body'>
            <input type='text'
              readOnly
              ref={passref}
              value={password}
              className='form-control mb-3' />

            <button className='btn btn-primary mb-3' onClick={copyPasswordToClipboard}>copy</button>
            <label className='form-label'>Length: {length}</label>

            <input type='range' min={6} max={60} value={length} onChange={(e) => setLength(e.target.value)} />

            <label className='form-label m-4'>number Allowed:</label>
            <input type='checkbox'
              defaultChecked={includeNumbers}
              onChange={() => { setIncludeNumbers((prev) => !prev) }}
              className='m-1' />

            <label className='form-label m-4'>char Allowed:</label>
            <input type='checkbox' className='m-1'
              defaultChecked={includeSpecialChars}
              onChange={() => { setIncludeSpecialChars((prev) => !prev) }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
