"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";
import Logo from "/public/logo_inverted.png";
import BlackButton from "../styles/blackButton";
import Link from "next/link";

const Login: React.FC = () => {
    const supabase = createClient();
    const router = useRouter();

    const [identifier, setIdentifier] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!identifier || !password) {
            setError("Please enter your email and password.");
            setLoading(false);
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: identifier, 
            password: password,
        });

        if (error) {
            setError("Invalid credentials. Please try again.");
            setLoading(false);
            return;
        }

        router.push("/dashboard/home");
    };

    const handleForgotPassword = async () => {
        if (!identifier) {
            alert("Enter your email to reset your password.");
            return;
        }

        const { error } = await supabase.auth.resetPasswordForEmail(identifier);
        if (error) {
            alert("Failed to send password reset email. Try again.");
        } else {
            alert("Password reset email sent!");
        }
    };

    return (
        <div className="flex flex-col bg-kinda-dark items-center justify-center w-full mt-10">
            <div className="flex flex-col bg-gray-200 mx-10 px-32 py-24 w-[80vw] lg:w-auto rounded-lg justify-center items-center text-kinda-dark inter">
                <img src={Logo.src} alt="Logo" className="w-32 mb-4" />

                <h1 className="righteous text-5xl text-center w-[70vw] lg:w-full">Case Closed</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 w-[70vw] lg:w-full">
                    <input
                        id="identifier"
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="Email"
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
                    <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-sm text-left text-blue-600 hover:text-blue-800 w-[70vw] lg:w-full"
                    >
                        Forgot Password?
                    </button>

                    {error && <p className="text-red-500">{error}</p>}

                    <BlackButton type={"submit"} disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </BlackButton>
                </form>

                <div className="flex flex-row text-sm mt-2 w-[70vw] lg:w-full text-center justify-center">
                    <p>Not a member?&nbsp;</p>
                    <Link href="/auth/register">
                        <button type="button" className="text-blue-600 hover:text-blue-800">
                            Register now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
