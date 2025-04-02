import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './SignUp.css';
import Header from '../landing/layout/Header';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const { setUserData } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    console.log(email, password, confirmPassword);
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setUserData(email, password);
  };

  return (
    <>
      <Header featuresPage={true} SignUp={false} />
      <div className="signup-page">
        <div className="signup-container">
          <h2 style={{margin: "0 0 8px 0", textAlign: "center", fontWeight: "normal"}}>Try Origami HR Free</h2>
          <p style={{margin: "0 0 15px 0", textAlign: "center", fontSize: "16px"}}>Immediate access. No credit card required.</p>
          
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <span className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#666666"/>
              </svg>
              </span>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            {error && <p className="error-message">{error}</p>}
            
            <button style={{margin: "16px 0 0 0"}} type="submit" className="signup-button">
              TRY IT FREE
            </button>
          </form>
        </div>

        <p className="terms">
          By signing up you accept our{' '}
          <a href="/privacy">Privacy & Terms</a>
        </p>

        <p style={{display: "flex", alignSelf: "flex-start", fontSize: "14px", color: "var(--white)"}}>
        © 2025 All Rights Reserved. Origami HR® is a registered trademark of Bulchi IT AG  
        </p>
      </div>
    </>
  );
};

export default SignUp; 