import React from 'react';
/*import ImageButtonList from './ImageButtonList'; */// Assuming ImageButtonList is imported from a separate file
import './Header_up.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import  {FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import {BsTwitter, BsYoutube} from "react-icons/bs";

const Header_up = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/LoginPage');
      };
    const RegisterPageClick = () => {
        navigate('/RegisterPage');
      };

    const faceBookHandler = () => {
        window.open(
          "https://www.facebook.com/HelloToppersGuidance/",
          "_blank"
        );
      };
 
    const xHandler = () => {
        window.open(
          "https://twitter.com/HelloToppers",
          "_blank"
        );
    };
    
    const youTubeHandler = () => {
        window.open(
          "https://www.youtube.com/@HelloToppersGuidance",
          "_blank"
        );
    };
    
    const linkedinHandler = () => {
        window.open(
          "https://www.linkedin.com/company/hellotoppers/",
          "_blank"
        );
    };

    
    return (
        <nav className="header-up">
            <div className='header-up-left'>
              <div className='logo'>
                  <img src='/images/topperlog.png' alt='logo'/>
              </div>
            </div>
            <div className='header-up-right'>
              <div className="header-buttons">
                <div className="SocialMediaContainer">
                        <button className="fbicon" onClick={faceBookHandler}>
                            <FaFacebookF size={20} /> 
                        </button>
                        <button className="fbicon" onClick={xHandler}>
                                    <BsTwitter size={20} />
                        </button>
                        <button className="fbicon" onClick={linkedinHandler}>
                                <FaLinkedinIn size={20} />
                        </button>
                        <button className="fbicon" onClick={youTubeHandler}>
                                    <BsYoutube size={25} />
                        </button>
                </div>
                <div className="LoginButtonContainer">
                    <button className='login-button' onClick={handleClick}>Login</button>
                    <button className='login-button'  onClick={RegisterPageClick}>Register</button>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Header_up;
