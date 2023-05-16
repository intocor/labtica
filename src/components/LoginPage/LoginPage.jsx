import React, { useState } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgGoogle } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="container-fluid login-background">
      <p className="welcome">Welcome to LabTICA!</p>
      <p className="login-description">Please log in to proceed to your CBC test results and personalized health</p>
      <p className="login-description">recommendations. Our secure platform ensures your privacy and confidentiality.</p>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <button className="btn-login border border-0 rounded-5">
            <CgGoogle />Continue with Google</button>
        </div>
      </div>

      <div className="row mt-4"></div>
      <div className="col d-flex justify-content-center">
        <hr className="line1 border border-1 opacity-100" />
        <p className="or mx-3">Or</p>
        <hr className="line1 border border-1 opacity-100" />
      </div>


      <div className="row mt-2">
        <div className="col d-flex justify-content-center">
          <button className="btn-signup border border-0 rounded-5" onClick={() => {
            navigate('/signin');
          }}>
            Sign Up
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
      </div>

      <div className="signup-link mt-4">
        <p>Don't have an account yet?</p>
      </div>

    </div>
  );
};

export default LoginPage;
