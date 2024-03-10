import '../css/login.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from '../services/loginService';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Basic validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    await authenticate(username, password).then(res => {
      console.log(res);
      if(res.authenticated) {
        res.isAdmin === 'ADMIN' ? navigate('/admin/usertable'): navigate('/home');
      }
    });
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <h1 className='title'>Login</h1>
          <form id="username" className="input-group">
            <input
              type="text"
              className="input-field"
              id="username"
              placeholder="User Name"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="button" className="submit-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="reg1">
            <Link to="/reg">
              No account? Register Here
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
