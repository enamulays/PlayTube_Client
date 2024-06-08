import '../style/Login.css'
function LoginPage() {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className='login-wrap'>
          <img src="../image/play_small_icon.PNG" alt="play_small_icon" />
          <span>Play</span>
          <div className="login-input" >
            <label htmlFor="login-input">Email*</label>
            <input type="Email" id="login-input" required placeholder="Please Enter Your Email"/>
          </div>
          <button>Sign in with Email</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
