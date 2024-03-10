import { useState } from 'react';
import { Link , useNavigate} from "react-router-dom";
import '../css/register.css';

function Register() {

  const navigate= useNavigate();
  const [userName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!userName || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
  
    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // Validate role input
    if (!(role === 'USER' || role === 'ADMIN')) {
      setError('Role must be either USER or ADMIN');
      return;
    }
  
    // Additional validation logic can be added here
  
    // If all validations pass, you can submit the form
    console.log('User Name:', userName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Role:', role);
    setError(''); // Clear error if there was one previously

    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2 className='register-title'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="userName"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className='register-button'>
          Sign Up
        </button>
        <p> <Link to="/">Already have an account? Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
