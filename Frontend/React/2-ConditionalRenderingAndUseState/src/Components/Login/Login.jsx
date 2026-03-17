const Login = ({ isLogin } = {}) => {
    console.log(isLogin)
    return (
        <>
            <section>
                {isLogin ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
            </section>
        </>
    )
}

export default Login