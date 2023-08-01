import React, { useEffect, useState } from 'react';
import './loginform.css'
import { gapi } from "gapi-script";

const LoginForm = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showpPopup] = useState("hide")

    const popup = () => {
        showpPopup("login-popup")
        setTimeout(() => showpPopup("hide"), 3000)
    }

    /*
    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("user sign in fail")
        console.log(e)
    }
    */
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>


            <div className="login-btn" onClick={popup}>Login</div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
    )
}

export default LoginForm