import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
        const token = Cookies.get('token'); 
        if (!token) {
          navigate('/login');
          return;
        }
        try {
          const res = await axios.get('http://localhost:3000/app/shop', {
            headers: { Authorization: `Bearer ${token}` } // Include token in headers
          });
          setUser(res.data);
        } catch (err) {
          console.error(err);
          navigate('/login');
        }
      };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <h1> <span className='font-medium'>Name:</span> {user.fullName}</h1>
      <p> <span className='font-medium'>Email:</span> {user.email}</p>
    </div>
  );
};

export default Shop;
