import { useState } from "react";
import "./App.css";
import View from "./components/View/View";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {Route , Routes, Navigate} from 'react-router-dom';
function App() {
	const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
	const handleCredentials = (email, password)=>{
		setEmail(email)
		setPassword(password)
	}
	return (
		<>
		<Routes>
			<Route path="/login" element={<Login credentials={handleCredentials}/>}/>
			<Route path="/home" element={
			<ProtectedRoutes email={email} password ={password}>
			<Home/>
			</ProtectedRoutes>
     		}/>
			<Route path="/view" element={<View/>}/>
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
		</>
);
}

function ProtectedRoutes ({ email , password , children}) {
	if((password === "") && (email === ""))
	return <Navigate to="/login" />
	return children
}
export default App;
