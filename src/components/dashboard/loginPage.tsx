import { useState } from "react";
import '../../styles/components/login.css';

interface LoginFormState {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginPage = () => {
    const [formState, setFormState] = useState<LoginFormState>({
        email: '',
        password: '',
        rememberMe: false,  
    });
const [showPassword, setShowPassword] = useState<boolean>(false);

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
console.log('Form Data:',formState);
}

return (
    <div className="login-container">
        <img className="login-logo" src="/Logo.svg" alt="Login Logo"/>
        <h1 style={{marginBottom: '8px'}}>Log In</h1>
        <p>Sign in to your ORIGAMI HR account</p>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    required
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formState.password}
                    onChange={(e) => setFormState({...formState, password: e.target.value})}
                    required
                    placeholder="Password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? 'Hide Password' : 'Show Password'}
                </button>
            </div>
            <div>
                <label>
                    <input
                    type="checkbox"
                    checked={formState.rememberMe}
                    onChange={(e) => setFormState({...formState, rememberMe: e.target.checked})}
                    />
                    Remember me
                </label>
            </div>
            <button type="submit">LOGIN</button>
        </form>
        <p>
            <a href="#forgot-password">Forgot your password?</a>
        </p>
        </div>
);
};

export default LoginPage;
