import { useState } from "react";
import "./App.css";
import View from "./components/View/View";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {Route , Routes, Navigate} from 'react-router-dom';
import { CartContext } from "./Contexts/CartContexts";
import Cart from "./components/Cart/Cart";
function App() {
	const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
	const [cartList , setCartList] = useState([]);
	const listHandler = (newItem) => {
		setCartList([newItem , ...cartList]);
	  };
	const handleCredentials = (email, password)=>{
		setEmail(email)
		setPassword(password)
	}
	const deleteCartItem =(id)=>{
		setCartList([...cartList.filter((cartItem) => cartItem.id!==id)]);
	}
	return (
		<>
		<CartContext.Provider value={{cartList, listHandler, deleteCartItem}}>
			<Routes>
				<Route path="/login" element={<Login credentials={handleCredentials}/>}/>
				<Route path="/home" element={
				<ProtectedRoutes email={email} password ={password}>
				<Home/>
				</ProtectedRoutes>
				}/>
				<Route path="/view" element={<View/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</CartContext.Provider>
		</>
);
}
function ProtectedRoutes ({ email , password , children}) {
	if((password === "") && (email === ""))
	return <Navigate to="/login" />
	return children
}
export default App;
