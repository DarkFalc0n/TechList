import React from 'react'
import "./App.css"
import "./index.css"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
    return (
        <div>
            <Navbar />
            <Login />
        </div>
    )
}

export default App