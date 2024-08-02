
const DoctorLogin = () => {
    return (
        <div >
            <h1> Doctor Login Page </h1>
            <form>
                <label>Email:</label>
                <input type="text" name="email" />
                <label>Password:</label>
                <input type="password" name="password" />
                <input type="submit" value="Login" />
            </form>

            <p>Don't have an account? <a href="/signup">Sign Up</a></p>

            <p>Forgot Password? <a href="/forgotpassword">Reset Password</a></p>
            
      


        </div>
    )
}

export default DoctorLogin
