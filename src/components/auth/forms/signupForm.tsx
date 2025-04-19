import React, { useState } from 'react';
import { useUser } from "../../../context/UserContext.tsx";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
    const { register } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<{
        email?: string;
        password?: string;
        confirmPassword?: string;
        general?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === 'email') setEmail(value);
        if (id === 'password') setPassword(value);
        if (id === 'confirmPassword') setConfirmPassword(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError({});
        setIsSubmitting(true);

        let hasErrors = false;
        const newErrors = { ...error };

        if (!email) {
            newErrors.email = 'Email is required';
            hasErrors = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
            hasErrors = true;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            hasErrors = true;
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            hasErrors = true;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
            hasErrors = true;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            hasErrors = true;
        }

        if (hasErrors) {
            setError(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const success = await register(email, password);
            
            if (success) {
                navigate('/dashboard');
            } else {
                setError({ email: 'An account with this email already exists' });
            }
        } catch (err) {
            setError({ general: 'An error occurred during signup. Please try again.' });
            console.error('Signup error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error.general && <p className="error-message general-error">{error.general}</p>}
            
            <div className="input-group">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#666666"/>
                    </svg>
                </span>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    className={error.email ? 'error-input' : ''}
                    disabled={isSubmitting}
                />
            </div>
            {error.email && <p className="error-message">{error.email}</p>}

            <div className="input-group">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#666666"/>
                    </svg>
                </span>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    className={error.password ? 'error-input' : ''}
                    disabled={isSubmitting}
                />
            </div>
            {error.password && <p className="error-message">{error.password}</p>}

            <div className="input-group">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#666666"/>
                    </svg>
                </span>
                <input
                    type="password"
                    id='confirmPassword'
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleChange}
                    className={error.confirmPassword ? 'error-input' : ''}
                    disabled={isSubmitting}
                />
            </div>
            {error.confirmPassword && <p className="error-message">{error.confirmPassword}</p>}

            <button 
                style={{margin: "16px 0 0 0"}} 
                type="submit" 
                className="signup-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'PROCESSING...' : 'TRY IT FREE'}
            </button>
        </form>
    );
};

export default SignupForm;