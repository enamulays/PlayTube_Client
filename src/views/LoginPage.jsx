import { useState } from "react";
import "../style/Login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(true);
  const [successfull, setSuccessfull] = useState('')

  const existingData = JSON.parse(localStorage.getItem('signUpData'));
  const existingEmail = existingData.map((item)=>item.email)
  console.log(successfull)

  const handlePasswordShow = () => {
    if (email) {
      setIsEmailSubmitted(!isEmailSubmitted);
    }
  };

  const loginSuccessfull = () =>{
    if(existingEmail === email){
      setSuccessfull("success")
    }
  }

  return (
    <div style={{ height: "90vh" }} className="relative">
      {isEmailSubmitted ? (
        <div className="login-wrap">
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>

          <div className="login-input">
            <label htmlFor="email-input">Email*</label>
            <input
              type="email"
              id="email-input"
              required
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handlePasswordShow}>
            Sign in with Email
          </button>
        </div>
      ) : (
        <div className="login-wrap password-area">
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>
          <div className="login-input">
            <label htmlFor="password-input">Password*</label>
            <input
              type="password"
              id="password-input"
              required
              placeholder="Please Enter Your Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginSuccessfull}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
