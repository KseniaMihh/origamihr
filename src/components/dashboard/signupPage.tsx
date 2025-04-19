import React from 'react';
import SignupForm from "../forms/signupForm.tsx";
import '../../styles/components/signup.css';
import Header from '../landing/layout/Header.tsx';


const SignupPage: React.FC = () => {
  return (
    <>
      <Header featuresPage={true} SignUp={false} />
        <div className="signup-page">
      <div style={{justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", height: "79.5vh"}}>
        <div className="signup-container">
          <h2 style={{margin: "0 0 8px 0", textAlign: "center", fontWeight: "normal"}}>Try Origami HR Free</h2>
          <p style={{margin: "0 0 15px 0", textAlign: "center", fontSize: "16px"}}>Immediate access. No credit card required.</p>

          <SignupForm />
        </div>

        <p className="terms">
          By signing up you accept our{' '}
          <a href="/privacy">Privacy & Terms</a>
        </p>

      </div>
        <p style={{display: "flex", alignSelf: "center", fontSize: "14px", color: "var(--white)", padding: "16px"}}>
            © 2025 All Rights Reserved. Origami HR® is a registered trademark of Bulchi IT AG
        </p>
        </div>
          </>
  );
};

export default SignupPage;