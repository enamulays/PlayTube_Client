
import { useState } from 'react';
import '../style/Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(true);
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsEmailSubmitted(!isEmailSubmitted);
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {isEmailSubmitted ? (
        <div className='login-wrap'>
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>
          <form onSubmit={handleEmailSubmit}>
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
            <button type="submit">Sign in with Email</button>
          </form>
        </div>
      ) : (
        <div className='login-wrap password-area'>
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>
          <div className="login-input">
            <label htmlFor="password-input">Password*</label>
            <input
              type="password"
              id="password-input"
              required
              placeholder="Please Enter Your Password"
            />
          </div>
          <button>Enter Your Password</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
