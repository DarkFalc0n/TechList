import { React, useRef, useContext } from 'react'
import { Link, Navigate } from "react-router-dom";
import { login } from "../utils/apiCalls";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email: email.current.value, password: password.current.value }, dispatch);
    }

    return (
        <div className="w-full">
            <div className="w-1/4 bg-slate-100 m-auto mt-12 px-8 py-8">
                <div className="text-3xl m-auto font-bold text-center">
                    Login
                </div>
                <form className="flex flex-col mt-12" onSubmit={handleLogin}>
                    <label className="text-slate-600 m-1 mb-0" for="email" >Email</label>
                    <input
                        className="h-8 m-1 mb-4 px-4"
                        type="text"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        ref={email}
                    />
                    <label className="text-slate-600 m-1 mb-0" for="pass">Password</label>
                    <input
                        className="h-8 m-1 mb-4 px-4"
                        type="password"
                        id="pass"
                        name="pass"
                        required
                        minLength="6"
                        placeholder="******"
                        ref={password}
                    />
                    <button type="submit" className="text-white bg-slate-600 m-auto mt-10 px-4 py-2 text-xl">Submit</button>
                </form>
                <Link to="/signup">
                    <div className="text-slate-500 w-full text-center mt-8 underline">New User? Sign up here.</div>
                </Link>
            </div>
        </div>
    )
}

export default Login