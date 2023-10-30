import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <h1>🐠</h1>
            <p>Copyright © {new Date().getFullYear()} Under the sea. All rights reserved.<br /><br />
                By:
                <a href="https://github.com/Cocofnas/" target="_blanc">Alexandra Meija</a>, <a href="https://github.com/lisawh0/" target="_blanc">Lisa Dahlkar</a>, <a href="https://github.com/jforjanice/" target="_blanc">Janice Cheng</a> & <a href="https://github.com/Hang-Nguyen-Vu" target="_blanc">Hang Nguyen</a> @ Technigo</p>

        </footer>
    );
};

export default Footer;
