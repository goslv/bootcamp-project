import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    const handleSumbit = (event)=>{
        event.preventDefault();
        console.log('Email',email);
        console.log('Password',password);
        navigate("/calc")
    };
    return(
        <div className="container">
            <form className="login" onSubmit={handleSumbit}>
                <h2>Login</h2>
                <div className="group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                </div>
            </form>
        </div>
    )
}
    