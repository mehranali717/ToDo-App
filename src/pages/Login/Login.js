import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
const Login =({credentials})=>{
    const navigate = useNavigate();
    const login = "Login"
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const getEmail =(e) => {
        setEmail(e)
    }
    const getPassword = (e) =>{
        setPassword(e)
    }
    useEffect(()=>{
        credentials(email,password)
    },[credentials,email,password])
    const onClick = ()=>{
        navigate("/Home")
    }
    return (
       <form className="form">
            <Input placholder="Enter Email" type="text" id="email" onChange={getEmail}/>
            <Input placholder="Enter Password" type="password" id="password" onChange={getPassword}/>
            <Button text={login} onClick={onClick}/>
       </form>
    )
}
export default Login