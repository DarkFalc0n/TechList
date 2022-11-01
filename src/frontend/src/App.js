import { React, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"
import "./App.css"
import "./index.css"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import { AuthContext } from "./context/AuthContext"

const App = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Posts />} render={() => {
                        (!user) && <Navigate to="/signup" />
                    }} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App