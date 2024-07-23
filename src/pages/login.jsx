import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            navigate("/home");
            setEmail('')
            setPassword('')
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="container w-[380px]">
                <h1>Please Login</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email</label>
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
    );
};

export default Login;
