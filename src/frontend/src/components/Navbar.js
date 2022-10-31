import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-slate-300 text-center flex flex-col justify-center ">
            <div className="w-9/12 flex flex-row justify-between m-auto">
                <div className="text-3xl font-black mt-2">TechList</div>
                <div className="flex flex-row justify-between">
                    <button className="bg-slate-600 text-white py-2 px-4 m-2">Login</button>
                    <button className="bg-slate-600 text-white py-2 px-4 m-2">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar