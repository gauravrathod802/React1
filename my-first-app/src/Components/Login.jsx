import { useNavigate } from "react-router-dom";
import './Styles/Login.css'
import { useState } from "react";
function Login() {
    const redirect = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const router = useNavigate();

    function handleChange(event) {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    async function Login(event) {
        event.preventDefault();
        if (loginData.email && loginData.password) {
            if (loginData.password.length > 7) {
                try {
                    // const response = await axios.post('http://localhost:8000/login', { loginData })
                    const response = { data: { success: true, message: "Login Sucessful." } }
                    if (response.data.success) {
                        alert(response.data.message)
                        setLoginData({ email: "", password: "" })
                        router('/')
                    }
                }
                catch (error) {
                    alert(error.response.data.message)
                }
            } else {
                alert("Password length must be more than 7 digit.")
            }
        } else {
            alert("all fields are mandatory!")
        }
    }
    function gotoRegister() {
        redirect('/form')
    }
    return (
        <div className="container">
            <form className="myClass" onSubmit={Login}>
                <h1>Login</h1>
                <label>Email</label><br />
                <input className="inputText" type="email" placeholder="enter email" onChange={handleChange} name='email' value={loginData.email} /><br />
                <label>Password</label><br />
                <input className="inputText" type="password" placeholder="enter password" onChange={handleChange} name='password' value={loginData.password} /><br />
                <button onSubmit={Login}>Login</button>
                <button onClick={gotoRegister}>Register</button>
            </form>
        </div>
    );
}
export default Login;