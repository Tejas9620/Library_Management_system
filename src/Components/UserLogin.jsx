import { useNavigate } from "react-router-dom";
import "../Styles/UserLogin.css";

const UserLogin = () => {
    let navigate = useNavigate();

    let login = () => {
        navigate("/user/");
    };
    return (
        <div className="userLogin">
            <div className="userformContainer">
                <div className="userloginH1">
                    <h1>Login As User</h1>
                </div>
                <div className="userform">
                    <form onSubmit={login}>
                        <div className="inputs">
                            <div className="useremail">
                                <input type="email" required placeholder="Enter Email/phone" />
                            </div>
                            <div className="userpassword">
                                <input type="password" required placeholder="Enter Password" />
                            </div>
                        </div>
                        <div className="userbutton">
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
