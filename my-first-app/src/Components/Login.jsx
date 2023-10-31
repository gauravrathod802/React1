import { useNavigate } from "react-router-dom";

function Login(){
    const redirect=useNavigate();

    function gotoRegister(){
        redirect('/Register');
    }
return(
<div>
    <h1>Login Page</h1>
    <button onClick={gotoRegister}>Register Here</button>
</div>
);
}
export default Login