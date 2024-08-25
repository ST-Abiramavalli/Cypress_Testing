import React, { useState } from 'react';
import './LoginForm.css';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setMessage('Email and password fields are required');
    } else {
      setMessage('Successfully logged in');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
