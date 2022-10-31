import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import "./index.css"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App