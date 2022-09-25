import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const user={
    githubHandle: "https://github.com/Zym0tic",
    linkedninHandle: "https://www.linkedin.com/in/lucas-rozon/",
}

function Footer() {
    return (
    <footer className="footer">
        <a href={user.githubHandle}><FontAwesomeIcon  icon="fa-brands fa-github" /></a>
        
        <a href={user.linkedninHandle}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
        
    </footer>
    )
};

export default Footer;