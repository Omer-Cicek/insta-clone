import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserInfo } from 'firebase.js';
import Header from 'pages/profile/components/Header';

const Profile = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        navigate('/', { replace: true });
      });
  }, []);

  return (
    <div>
      <Header user={user} />
      profilePage = {username}
    </div>
  );
};

export default Profile;
