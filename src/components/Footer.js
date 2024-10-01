import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/">Back Home</Link>
            <p style={{fontSize:"0.7rem"}}>Copyright &copy; {new Date().getFullYear()} The Usual Path. All rights reserved.</p>
        </footer>
    );
}

export default Footer;