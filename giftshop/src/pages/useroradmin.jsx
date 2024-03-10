import '../css/login.css';
//import { useState } from 'react';
import { useNavigate} from "react-router-dom";

function UserOrAdmin() {


  const navigate = useNavigate();

  const handleUser= () => {
      navigate('/login');
  };

  const handleAdmin= () => {

    navigate('/admin/login');
};

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <h1 className='title'>What is your Role?</h1>
          <form  id="email" className="input-group">
            <button type="button" className="submit-btn" onClick={handleUser}>
              User
            </button>
            <button type="button" className="submit-btn" onClick={handleAdmin}>
              Admin
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserOrAdmin;