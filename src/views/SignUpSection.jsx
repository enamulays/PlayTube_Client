import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function SignUpSection() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [eyeBtn, setEyeBtn] = useState(true);
  const [emailError, setEmailError] = useState('')

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("signUpData")) || [];
    const existEmail = existingData.some((data)=> data.email === email)
    if(existEmail){
      setEmailError("Email or Password Already Exist")
    }else{

      const newSignData = { userName, email, password };
      const newSignUpData = [...existingData, newSignData];
  
      localStorage.setItem("signUpData", JSON.stringify(newSignUpData));
      setEmailError('Signup has been Succesfully! Please Login')
    }
    setEmail('')
    setPassword('')
    setUserName('')

  };

  return (
    <div style={{ height: "90vh" }}>
      <div className="login-wrap">
        <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
        <span>Play</span>
        <form onSubmit={handleEmailSubmit}>
          <div className="login-input relative">
            <label htmlFor="user">User Name*</label>
            <input
              type="text"
              id="user"
              required
              placeholder="Enter your User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="email-input">Email*</label>
            <input
              type="email"
              id="email-input"
              required
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password">Password*</label>
              <input
                type={eyeBtn ? "password" : "text"}
                id="password"
                required
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="password-btn"
                onClick={() => setEyeBtn(!eyeBtn)}
              >
                {eyeBtn ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>
          <h6 className="text-red-500 pb-4 text-center text">{emailError}</h6>
          <button type="submit">Sign Up with Email</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpSection;
