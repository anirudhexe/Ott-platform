
import "./login.scss";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import bglogin from '../../assets/bglogin.mp4';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch,error } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <video autoPlay muted loop id="myVideo">
        <source src={bglogin} type="video/mp4"/>
      </video>
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>
            New to Chillflix? <Link to='/register'><b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="https://www.google.com/recaptcha/about/">Learn more</a>.
          </small>
        </form>
      </div>
    </div>
  );
}
