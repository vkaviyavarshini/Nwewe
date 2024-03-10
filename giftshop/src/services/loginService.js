import { API_URL } from "../config/config";

const authenticate = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    
    if (response.ok) {
      const token = await response.text();
      localStorage.setItem('token', token);
      return {
        authenticated: true,
        isAdmin: JSON.parse(atob(token.split('.')[1])).role
      };
    } else {
      return {authenticated: false};
    }
  } catch (error) {
    console.log("Error", error);
    return {authenticated: false};
  }
}

const registerNewUser = (body) => {
    fetch(`${API_URL}/auth/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log("Error", err);
    });
}

export {authenticate, registerNewUser}