import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import API from '../utils/API';
import Axios from 'axios';

export default function Login () {
    
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUser, setRegisterUser] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [data, setData] = useState("")
    const regUser = {
        username: "CryptAgain",
        password: "passw0rd",
        email: "cryptt@aol.com",
        age: 75,
        firstName: "Crypt",
        lastName: "Test",
        gender: "Female",
        vacation: "Beach",
        animals: "petLover",
        flavor: "Salty",
        activity: "Outdoors",
        personality: "Boring",
        family: "Yes",
        priorities: "Marriage",
        entertainment: "movies",
        alcohol: "Yes",
        religion: "LDS",
        biking: true,
        camping: true,
        computers: false,
        cooking: true,
        dadJokes: false,
        exercise: true,
        fishing: true,
        gaming: false,
        hiking: true,
        reading: false,
        techDrones: false,
        myConnections: [],
        blockedUsers: []
    }
    const [user, setUser] = useState("")
    // 15:00 for functions
    const login = () => {
        Axios({
            method: "POST",
            data: regUser,
            withCredentials: true,
            url: "http://localhost:3000/login"
        }).then(res => console.log(res))
    }
    const register = () => {
         Axios({
            method: "POST",
            data: regUser,
            withCredentials: true,
            url: "http://localhost:3000/api/register"
        }).then(res => console.log(res))
    }

    const getUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3000/getUser"
        }).then(res => setData(res.data))
    }

     return (
        <div className="App">
            <div>
            <h1>Login Here:</h1>
            <input placeholder="username" onChange={e => setLoginUsername(e.target.value)} />
            <input placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
            <button onClick={login}>Submit</button>
            </div>
            <div>
            <h1>Register Here:</h1>
            <input placeholder="username" onChange={e => setRegisterUser(e.target.value)} />
            <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
            <button onClick={register}>Submit</button>
            </div>
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {
                data.username ? <h1>Welcome back: {data.username} </h1> : null
            }
        </div>

     )
}