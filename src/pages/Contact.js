import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header">
                    
                </div>
            <div className="contactBox">
                <h1>Contact me !</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>France</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="+33781876967">
                        <span
                                className="clickInput"
                                onClick ={() => { alert('Copied !')}}>
                                    0781876967
                            </span>
                        </CopyToClipboard>
                        
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="milanrgmnt@gmail.com">
                            <span
                                className="clickInput"
                                onClick ={() => { alert('Copied !')}}>
                                    milanrgmnt@gmail.com
                            </span>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <a href="https://www.linkedin.com/in/milan-rougemont/" target="_blank" rel="noopener noreferrer">
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/milaneuh" target="_blank" rel="noopener noreferrer">
                        <h4>GitHub</h4>
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="https://codepen.io/milaneuh" target="_blank" rel="noopener noreferrer">
                           <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Contact;