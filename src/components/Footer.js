import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <a href="mailto:luca_frattini@outlook.com" className="footer-link">
                luca_frattini@outlook.com
                </a>
                <span className="separator">|</span>
                <a
                href="https://github.com/LucaFrat/theusualpath"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                >
                View Source on GitHub
                </a>
            </div>
            {/* <Link to="/">Back Home</Link> */}
            <p style={{fontSize:"0.7rem"}}>Copyright &copy; {new Date().getFullYear()} The Usual Path. All rights reserved.</p>
        </footer>
    );
}

export default Footer;