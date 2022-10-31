import React from 'react'
import "./App.css"
import "./index.css"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <div>
            <Navbar />
            {/* <Login /> */}
            <Signup />
        </div>
    )
}

export default App