import { createContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token'); // Use Cookies.get instead of getCookie

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
        // Handle invalid token
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      // Call the login API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle network or other errors
    }
  };

  const logout = async () => {
    try {
      // Call the logout API
      await fetch('/api/logout', { method: 'GET' });
      setUser(null);
      Cookies.remove('token'); // Use Cookies.remove instead of removeCookie
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle logout error
    }
  };

  const contextValue = { user, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
