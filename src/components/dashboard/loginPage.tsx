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
    <div className="main">
    <div className="login-container">
        <img className="login-logo" src="/Logo_dark.svg" alt="Login Logo"/>
        <h2 style={{margin: '0 0 8px 0', padding: '0', textWrap: 'nowrap', fontWeight: 'normal'}}>Log In</h2>
        <p style={{marginBottom: '10px', marginTop: '10px', fontSize: '18px'}}>Sign in to your ORIGAMI HR account</p>
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
                    style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px', color: 'var(--dark-grey)'}}
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
        <p style={{margin: '10px 0 0 0'}}>
            <a style={{color: 'var(--orange)', textDecoration: 'none', fontSize: '14px'}} href="#forgot-password">Forgot your password?</a>
        </p>
        </div>
        </div>
);
};

export default LoginPage;
