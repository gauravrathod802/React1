import{useNavigate} from 'react-router-dom'

function Register(){
    const router=useNavigate();

    function gotoLogin(){
        router('/Login')
    }
    return(
        <div>
        <h1>Register</h1>
        <p>If you already have an account click login</p>
        <button onClick={gotoLogin}>Login</button>
        </div>
    )
}
export default Register;