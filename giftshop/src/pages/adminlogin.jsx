import '../css/login.css';
import { useState } from 'react';
import { Link , useNavigate} from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('Logging in with:', email, password);
      navigate('/admin/usertable');
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <h1 className='title'>Admin Login</h1>
          <form  id="email" className="input-group">
            <input
              type="email"
              className="input-field"
              id="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="button" className="submit-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="reg1">
            <Link to = "/admin/reg">
              Dont have an account? Register Here
            </Link>
            <br/>
            <br/>
            <Link to = "/">
              Choose Role
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;