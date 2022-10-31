import React from 'react'

const Signup = () => {
    return (
        <div className="w-full">
            <div className="w-1/4 bg-slate-100 m-auto mt-12 px-8 py-8">
                <div className="text-3xl m-auto font-bold text-center">
                    Sign Up
                </div>
                <form className="flex flex-col mt-12">
                    <label className="text-slate-600 m-1" for="Username">Username</label>
                    <input className="h-8 m-1 mb-4 px-4" type="text" id="fname" name="fname" />
                    <label className="text-slate-600 m-1" for="email">Email</label>
                    <input className="h-8 m-1 mb-4 px-4" type="text" id="email" name="email" />
                    <label className="text-slate-600 m-1" for="pass">Password</label>
                    <input className="h-8 m-1 mb-4 px-4" type="password" id="pass" name="pass" />
                    <label className="text-slate-600 m-1" for="pass">Confirm Password</label>
                    <input className="h-8 m-1 mb-4 px-4" type="password" id="cpass" name="cpass" />
                    <button className="text-white bg-slate-600 m-auto mt-10 px-4 py-2 text-xl">Submit</button>
                </form>
                <div className="text-slate-500 w-full text-center mt-8">Already a user? Login here.</div>
            </div>
        </div>
    )
}

export default Signup