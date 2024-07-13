import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { FaHome } from "react-icons/fa";

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
    <nav>
      <div className={styles.home_button}>
        <button className={styles.homeicon} onClick={handleHomeClick}>
          <FaHome size={40} />
        </button>
      </div>
      <div className={styles.Logincontainer}>
        <div className={styles.Logincontent1}>
          <div className={styles.loginImage}>
            <img src='/images/a_Register_as_a_student banner.c445d4da.jpg' alt='reg-image' classname={styles.image} />
          </div>
          <div className={styles.logincontent}>
            <h1>Register as Student</h1>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>
                  Type Your Mob Number to Register
                  <input
                    type="text"
                    value={Mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RegisterPage;
