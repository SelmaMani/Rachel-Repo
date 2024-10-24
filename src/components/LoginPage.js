import React, { useState } from 'react';
import '../App.css'; // Ensure you import the App.css file
import inputIcon from '../assets/input_icon.png'; // Adjust the path as needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-hero">
      <h1 className="title-big">Welcome Back!</h1>
      <p className="text-normal">
        Let us find for you the best recipes you can get with only what you have available at home.
      </p>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <img src={inputIcon} alt="Email Icon" className="input-icon" /> {/* Email Icon */}
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="login-input text-normal-volkorn" 
          />
        </div>
        <div className="input-group">
          <img src={inputIcon} alt="Password Icon" className="input-icon" /> {/* Password Icon */}
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="login-input text-normal-volkorn" 
          />
        </div>
        <button type="submit" className="login-button title-medium">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
