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

  const handleLoginClick = () => {
    navigate('/LoginPage');
  };


  const isValidMobileNumber = (number) => {
    // Check if the mobile number has 10 digits
    return number.length === 10;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
        <div className={styles.LoginImageContent}>
          <img src='/images/a_Register_as_a_student banner.c445d4da.jpg' alt='reg-image' className={styles.LoginImage} />
        </div>
        <div className={styles.LoginFormContent}>
          <div className={styles.LoginTopContent}>
            <div className={styles.hellotopper_logo_LoginContent}>          <img src='/images/topperlog.png' />
              <p className={styles.RegisterAsstudent}>Register as Student</p>
            </div>
          </div>
          <div className={styles.LoginMidContent}>
            <div ClassName={styles.LoginMidContent_LoginMainFrom}>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label>
                    <p className={styles.TypeMobNo}> Type Your Mob Number to Register</p>
                    <div className={styles.inputWrapper}>
                      <span className={styles.prefix}>
                        <img src="/images/indian-flag.jpeg" alt="India Flag" className={styles.flag} />
                        +91
                      </span>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={Mobileno}
                        onChange={(e) => setMobileno(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                  </label>
                </div>
                <button type="submit" disabled={!isValidMobileNumber(Mobileno)} className={styles.submitButton}>Register</button>
              </form>

            </div>
            <p className={styles.AlreadyRegistered}>Already registered? <button className={styles.LoginNow} onClick={handleLoginClick}>Login Now</button></p>
            <div className={styles.LoginCheckBoxTermsConditions}> <input type='checkbox' className={styles.LoginCheckBox}></input>By continuing here you are agreeing to our terms of service and privacy policy.</div>
          </div>
          <div className={styles.LoginButtomContent}>
            <button className={styles.button_LoginButtomContent}>
              Contact Us
            </button>
            <button className={styles.button_LoginButtomContent} >
              Terms Of Service
            </button>
            <button className={styles.button_LoginButtomContent}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default RegisterPage;
