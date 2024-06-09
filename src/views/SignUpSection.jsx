import { useState } from "react"


function SignUpSection() {
  const [email, setEmail] = useState();
const handleEmailSubmit = ()=>{

}

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className='login-wrap'>
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>
          <form onSubmit={handleEmailSubmit}>
            <div className="login-input">
              <label htmlFor="email-input">User Name*</label>
              <input
                type="text"
                id="email-input"
                required
                placeholder="Enter your User Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <label htmlFor="email-input">Password*</label>
              <input
                type="password"
                id="email-input"
                required
                placeholder="New Password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit">Sign in with Email</button>
          </form>
        </div>
    </div>
  )
}

export default SignUpSection
