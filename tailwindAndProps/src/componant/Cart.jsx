import { useCallback, useEffect, useRef, useState } from 'react';
const Cart = () => {

    const [length, setlength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeCharacters, setIncludeCharacters] = useState(false);
    const [password, setPassword] = useState('');

    // use useRef to store the previous values of length, includeNumbers, and includeCharacters
    const passref = useRef(null);


    const handleLengthChange = useCallback(() => {

        let str = 'abcdefghijklmnopqrstuvwxyz';
        let pass = '';

        if (includeNumbers) {
            str += '0123456789';
        }
        if (includeCharacters) {
            str += '!@#$%^&*()_+[]{}|;:,.<>?';
        }
        for (let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length) + 1;
            pass += str.charAt(char);
            console.log(`Password is: ${pass}`);
        }
        setPassword(pass);

    }, [length, includeNumbers, includeCharacters]);

    const Copypasswordclipborad = useCallback(() => {

        passref.current.select();
        // passref.current.setSelectionRange(0, 99999); // For mobile devices  
        passref.current.setSelectionRange(0, password.length); // For mobile devices
        window.navigator.clipboard.writeText(password)
    }, [password]);


    useEffect(() => {
        handleLengthChange();
    }, [length, includeNumbers, includeCharacters, handleLengthChange]);

    return (
        <div>
            <div className='m-4 p-4 bg-white shadow-lg rounded-lg'>
                <h2 className='text-xl font-bold text-gray-800'>Password Generater: </ h2>
                <input type='text'
                    value={password} readOnly
                    ref={passref}
                    className='mt-4 px-2 py-2  form-control text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'

                />
                <button onClick={Copypasswordclipborad} className=' shrink-0 bg-primary m-4 rounded-pill' > copy</button>
                <label className="text-secondary ms-md-4" >Length:{length} </label>
                <input type="range" min={6}
                    max={60}
                    value={length}
                    className=' cursor-pointer' onChange={(e) => setlength(e.target.value)} />
                <label className="text-secondary ms-md-4" >Number Allowed: </label>
                <input type="checkbox" defaultChecked={includeNumbers}
                    id='numberinput'
                    onChange={() => {
                        setIncludeNumbers((prev) => !prev)
                    }}
                    className="m-4 ml-md-4 text-primary" />
                <label className="text-secondary ms-md-4" >Character Allowed: </label>
                <input type="checkbox"
                    id='characterinput'
                    onChange={() => {
                        setIncludeCharacters((prev) => !prev)
                    }}
                    className="m-4 ml-md-4 text-primary" />

            </div>
        </div>


    )
}

export default Cart
