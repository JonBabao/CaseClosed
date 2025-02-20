"use client";

import React, { useRef, useState, useEffect } from 'react';
import Logo from '/public/logo_inverted.png';
import BlackButton from '../styles/blackButton';
import Link from 'next/link';


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username, password);
        alert("Login submitted!");
    }

    const handleForgotPassword = () => {
        alert("Why?");
    }

    return(
        <div className="flex flex-col bg-kinda-dark items-center justify-center w-full mt-10">
            <div className="flex flex-col bg-gray-200 mx-10 px-32 py-24 w-[80vw] lg:w-auto rounded-lg justify-center items-center text-kinda-dark inter">
                <img
                    src={Logo.src}
                    alt="Logo"
                    className="w-32 mb-4"
                />

                <h1 className="righteous text-5xl text-center w-[70vw] lg:w-full">Case Closed</h1>
                
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 w-[70vw] lg:w-full">
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username or Email"
                        required
                        className="w-full rounded-lg p-2"
                    />
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full rounded-lg p-2"
                    />
                    <BlackButton onClick={handleSubmit}>Log In</BlackButton>
                </form>
                <Link href="/auth/register">
                    <button
                        type="button"
                        className="text-sm mt-2 text-blue-600 hover:text-blue-800 w-[70vw] lg:w-full"
                        >
                        Don't have an account yet?
                    </button>
                </Link>
                <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm mt-2 text-blue-600 hover:text-blue-800 w-[70vw] lg:w-full"
                    >
                    Forgot Password?
                </button>
                
            </div> 
        </div>

    );
};

export default Login;