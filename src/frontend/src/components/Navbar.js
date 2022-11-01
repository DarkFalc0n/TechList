import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-slate-300 text-center flex flex-col justify-center ">
            <div className="w-9/12 flex flex-row justify-between m-auto">
                <Link to="/" exact>
                    <div className="text-3xl font-black mt-2">TechList</div>
                </Link>
                <div className="flex flex-row justify-between">
                    <Link to="/login">
                        <button className="bg-slate-600 text-white py-2 px-4 m-2">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-slate-600 text-white py-2 px-4 m-2">Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar