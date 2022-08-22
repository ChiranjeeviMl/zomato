import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <footer id="footer">
            <p id="footText">&copy; Chiru</p>
            <hr/>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv noBorder">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
        
        </footer>
    )
}

export default Footer;