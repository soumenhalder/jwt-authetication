import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { FaHome } from "react-icons/fa";

const OTPverification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [isVerified, setIsVerified] = useState(false);
    const inputs = useRef([]);
    const handleHomeClick = () => {
        navigate('/');
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyUp = (e, index) => {
        if (e.key === "Backspace" && e.target.previousSibling) {
            e.target.previousSibling.focus();
        }
    };


    const handleVerify = () => {
        // Simple verification logic
        if (otp.join('') === '1234') {
            setIsVerified(true);
        } else {
            alert('Invalid OTP');
        }
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
                    <img src='/images/a_login_page.1bcc0867.jpg' alt='reg-image' className={styles.LoginImage} />
                </div>
                <div className={styles.LoginFormContent}>
                    <div className={styles.LoginTopContent}>
                        <div className={styles.hellotopper_logo_LoginContent}>          <img src='/images/topperlog.png' />
                        </div>
                    </div>


                    <div className={styles.LoginMidContent}>

                        <h2>OTP Verification</h2>
                        <div className="otp-inputs">
                            {otp.map((data, index) => (



                                <input
                                    className={styles.otp_input_box}
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onKeyUp={e => handleKeyUp(e, index)}
                                    ref={el => (inputs.current[index] = el)}
                                    onFocus={e => e.target.select()}
                                />

                            ))}




                        </div>
                        <button className="verify-button" onClick={handleVerify}>
                            Verify
                        </button>
                        {isVerified && <p className="success-message">OTP Verified Successfully!</p>}


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

export default OTPverification;
