
import{useNavigate} from 'react-router-dom'
function Register(){
    const router=useNavigate();

    function gotoLogin(){
        router('/Login')
    }
    return(
        <div>
        <h1>Register</h1>
        <button onClick={gotoLogin}>Login?</button>
        </div>
    )
}
export default Register;