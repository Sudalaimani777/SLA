import "./style.css"
const Login = () => {
    return (
        <>
            <section>
                <form action="">
                    <p>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" id="userName" />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </p>
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    )
}

export default Login