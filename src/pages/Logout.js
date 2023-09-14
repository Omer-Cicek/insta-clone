import React, { useEffect } from 'react';
import { logout } from 'firebase.js';

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);

  return <div>Logout</div>;
};

export default Logout;
