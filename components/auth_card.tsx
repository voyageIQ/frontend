"use client";

export default function auth() {
    const card_type = {
        login: "Login",
        signup: "Sign Up",
        forgot_password: "Forgot Password"
    };
    return (
        <main className="div 0">
            <div className="auth-card">
                <h1>vision-iq</h1>
                <h3>{card_type.login}</h3>

                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>{card_type.login} -&gt;</button>

                <p>Don&apos;t have an account? <a href="#">Sign up</a></p>
                <p><a href="#">Forgot Password</a></p>
            </div>
        </main>
    );
}