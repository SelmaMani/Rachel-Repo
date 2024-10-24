import React, { useState } from 'react';
import '../App.css'; // Ensure you import the App.css file
import inputIcon from '../assets/input_icon.png'; // Adjust the path as needed

const SignupPage = () => {
  const [fullName, setFullName] = useState(''); // State for full name
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [confirmedPassword, setConfirmedPassword] = useState(''); // State for confirm password

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Full Name:', fullName, 'Email:', email, 'Password:', password, 'Confirmed Password:', confirmedPassword);
  };

  // Prevent drag and drop
  const preventDragOver = (e) => {
    e.preventDefault();
  };

  const preventDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-hero">
      <h1 className="title-big">Welcome With Us !</h1>
      <p className="text-normal">
        Let us find for you the best recipes you can get with only what you have available at home.
      </p>
      <form onSubmit={handleSignup} className="signup-form">
        <div className="input-group">
          <img src={inputIcon} alt="Full Name Icon" className="input-icon" />
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName}
            onDragOver={preventDragOver} // Prevent drag over
            onDrop={preventDrop} // Prevent drop
            onChange={(e) => setFullName(e.target.value)} 
            required 
            className="signup-input text-normal-volkorn" 
          />
        </div>
        <div className="input-group">
          <img src={inputIcon} alt="Email Icon" className="input-icon" />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onDragOver={preventDragOver} // Prevent drag over       
            onDrop={preventDrop} // Prevent drop
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="signup-input text-normal-volkorn" 
          />
        </div>
        <div className="input-group">
          <img src={inputIcon} alt="Password Icon" className="input-icon" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onDragOver={preventDragOver} // Prevent drag over       
            onDrop={preventDrop} // Prevent drop
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="signup-input text-normal-volkorn" 
          />
        </div>
        <div className="input-group">
          <img src={inputIcon} alt="Confirm Password Icon" className="input-icon" />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmedPassword}
            onDragOver={preventDragOver} // Prevent drag over       
            onDrop={preventDrop} // Prevent drop
            onChange={(e) => setConfirmedPassword(e.target.value)} 
            required 
            className="signup-input text-normal-volkorn" 
          />
        </div>
        <button type="submit" className="signup-button title-medium">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
