import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Login(props) {

    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();
    const url = 'http://localhost:3001/api';
    const form = { username,pw };

    const handleUser = e => { setUsername(e.target.value) }
    const handlePw = e => { setPw(e.target.value) }

    const signIn = async () => {
        if (username === '' || pw === ''){ 
            alert('Please enter username and password');
            return;
        }
        
        await axios.post(url,form)
        .then((res) => {

            const { data: { message,hasSucceeded } } = res;
            props.setResult({ message,hasSucceeded });

            if (!hasSucceeded) {
                alert(message);
                return;
            }

            navigate('/');
        })
        .catch(err => console.log(err));

        // await axios.get(url)
        // .then((res) => {

        //     const { data: { message, hasSucceeded } } = res;
        //     localStorage.setItem('token', auth-token );

        //     props.setResult({ message, hasSucceeded });
        //     navigate('/');
        // })
        // .catch(err => console.log(err));
    }
    
    return (
        <div>
        <form onSubmit={(e) => e.preventDefault()} className="form" action="/" method="get">
            <label htmlFor="login-jwt"> Login JWT </label>
            <input
            type="text"
            placeholder="Username"
            className="user-input"
            value={username}
            onChange={handleUser}
            autoComplete="off"
            />
            <input
            type="password"
            placeholder="Password"
            className="pw-input"
            value={pw}
            onChange={handlePw}
            autoComplete="off"
            />
            <button onClick={signIn}> Sign in </button>       
        </form>
        </div>
    );
}

export default Login;
