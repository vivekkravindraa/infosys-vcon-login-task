import React, { useState } from 'react'

export default function Login() {
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ submitMode, setSubmitMode ] = useState(false);

    const loginForm = (
        <React.Fragment>
            <div>
                <label>Enter Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Enter Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setSubmitMode(true)}>Submit</button>
            </div>
        </React.Fragment>
    )

    const message = `Hello ${name}`;

    return (
        <div className="loginContainer">
           {!submitMode ? loginForm : message}
        </div>
    )
}
