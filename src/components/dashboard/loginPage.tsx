import React, { useState } from "react";
import '../../styles/components/login.css';
import {useNavigate} from "react-router-dom";

interface LoginError {
    email?: string;
    password?: string;
}

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
    const [error, setError] = useState<LoginError>({});

    const validateEmail = (email: string) : string | undefined => {
        if (!email) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Invalid email address';
        return undefined;
    }

    const validatePassword = (password: string) : string | undefined => {
        if (!password) return 'Password is required';
        if (password.length < 8) return 'Password must be at least 8 characters long';
        return undefined;
    }

    const handleSubmit = (e: React.FormEvent) => {
        console.log(formState);
        e.preventDefault();
        setError({});

        const emailError = validateEmail(formState.email);
        if (emailError) {
            setError((prevError: LoginError) => ({...prevError, email: emailError}));
            return;
        }

        const passwordError = validatePassword(formState.password);
        if (passwordError) {
            setError((prevError: LoginError) => ({...prevError, password: passwordError}));
            return;
        }
    };

    const navigate = useNavigate();

    return (
        <div className="main">
        <div className="login-container">
            <img onClick={() => navigate('/')} className="login-logo" src="/Logo_dark.svg" alt="Login Logo"/>
            <h2 style={{margin: '0 0 8px 0', padding: '0', textWrap: 'nowrap', fontWeight: 'normal'}}>Log In</h2>
            <p style={{marginBottom: '10px', marginTop: '10px', fontSize: '16px'}}>Sign in to your ORIGAMI HR account</p>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-with-icon">
                        <span className="input-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#666666"/>
                            </svg>
                        </span>
                        <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            placeholder="Email"
                            className={error.email ? 'error-input' : ''}
                        />
                    </div>
                    {error.email && <p className="error-message">{error.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-with-icon">
                        <span className="input-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#666666"/>
                            </svg>
                        </span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formState.password}
                            onChange={(e) => setFormState({...formState, password: e.target.value})}
                            required
                            placeholder="Enter password"
                            className={error.password ? 'error-input' : ''}
                        />
                    </div>
                    {error.password && <p className="error-message">{error.password}</p>}
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
                <button onClick={handleSubmit} type="submit" className="login-button">LOGIN</button>
            </form>
            <p style={{margin: '10px 0 0 0'}}>
                <a style={{color: 'var(--orange)', textDecoration: 'none', fontSize: '14px'}} href="#forgot-password">Forgot your password?</a>
            </p>
            </div>
            </div>
        );
    };

    export default LoginPage;
