import './Form.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    const router = useNavigate();
    console.log(userData, "userData state")

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    function Submit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            try {
                const response = { data: { success: true, message: "Registration Completed." } }

                if (response.data.success) {
                    alert(response.data.message)
                    setUserData({ name: "", email: "", password: "" })
                    router('/login')
                }

            }
            catch (error) {
                alert(error.response.data.message)
            }
        }
        else {
            alert("All fields are mandatory.")
        }
    }
    return (
        <div>
            <div className='Sign-up'>
                <form id='myForm' onSubmit={Submit}>
                <h1>Sign Up</h1>
                    <label>Name</label><br />
                    <input className="input" value={userData.name} type="text" required onChange={handleChange} name='name' placeholder='enter name'/><br />
                    <label>Email</label><br />
                    <input className="input" value={userData.email} type="email" required onChange={handleChange} name='email' placeholder='enter email' /><br />
                    <label>Password</label><br />
                    <input className="input" value={userData.password} type="password" required onChange={handleChange} name='password' placeholder='enter password'/><br />
                    <input className="submit" type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    )
}
export default Form;