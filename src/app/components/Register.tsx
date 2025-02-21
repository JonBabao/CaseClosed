"use client";

import React, { useState } from 'react';
import Logo from '/public/logo_inverted.png';
import BlackButton from '../styles/blackButton';
import Link from 'next/link';

const Register: React.FC = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <div className="flex flex-col bg-kinda-dark items-center justify-center w-full mt-10">
        <div className="flex flex-col bg-gray-200 mx-10 px-32 py-16 w-[80vw] lg:w-auto rounded-lg justify-center items-center text-kinda-dark inter">
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
                    placeholder="Username"
                    required
                    className="w-full rounded-lg p-2"
                />
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
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
                <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="w-full rounded-lg p-2"
                />
                <BlackButton onClick={handleSubmit}>Register</BlackButton>


            </form> 
            <div className="flex flex-row text-sm mt-2 w-[70vw] lg:w-full text-center items-center justify-center">
                <p>Have an account already?&nbsp;</p>
                <Link href="/auth/login">
                    <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800"
                        >
                        Login
                    </button>
                </Link>
            </div>
        </div> 
    </div>
    );
};

export default Register;