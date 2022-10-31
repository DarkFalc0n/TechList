import React from 'react'

const Login = () => {
    return (
        <div className="w-full">
            <div className="w-1/4 bg-slate-100 m-auto mt-12 px-4 py-8">
                <div className="text-xl m-auto font-bold text-center">
                    Login
                </div>
                <form className="flex flex-col mt-12">
                    <label className="text-slate-600 m-1" for="email">Email</label>
                    <input className="h-8 m-1 mb-4 px-4" type="text" id="fname" name="fname" />
                    <label className="text-slate-600 m-1" for="pass">Password</label>
                    <input className="h-8 m-1 mb-4 px-4" type="password" id="lname" name="lname" />
                    <button className="text-white bg-slate-600 m-auto mt-10 px-4 py-2 text-xl">Submit</button>
                </form>
                <div className="text-slate-500 w-full text-center mt-8">New User? Sign up here.</div>
            </div>
        </div>
    )
}

export default Login