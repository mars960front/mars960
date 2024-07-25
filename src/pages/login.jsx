import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const labels = document.querySelectorAll(".form-control label");

        labels.forEach((label) => {
            label.innerHTML = label.innerText
                .split("")
                .map(
                    (letter, idx) =>
                        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
                )
                .join("");
        });
    }, []);

    const handleLoginClick = () => {
        if (email === "hello" && password === "12345") {
            setSuccess("Login successful! Redirecting...");
            setError('');
            setTimeout(() => {
                navigate("/home");
            }, 5000); 
        } else {
            setError("Error! Login or password incorrect.");
            setSuccess('');
            setTimeout(() => setError(''), 5000); // Clear error message after 5 seconds
        }
    };

    return (
        <div className="relative w-[100%] h-[100%]">
            <div className="flex items-center justify-center">
                <div className="container w-[380px] h-[400px]">
                    <h1>Please Login</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-control">
                            <input
                                type="text"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Login</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        <button
                            type="button"
                            className="login-btn"
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                        <p className="text">
                            Don't have an account? <a href="#">Register</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className="w-[380px] absolute bottom-0 right-0">
                {error && (
                    <div role="alert" className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className="w-[380px] absolute bottom-0 right-0">
                        <div role="alert" className="alert alert-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{success}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
