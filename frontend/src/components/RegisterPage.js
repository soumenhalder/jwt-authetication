import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [Mobileno, setMobileno] = useState('');


  const handleHomeClick = () => {
    navigate('/');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Mobileno: ${Mobileno}`);
  };

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Mobileno:
            <input
              type="text"
              value={Mobileno}
              onChange={(e) => setMobileno(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default RegisterPage;
