import React from "react";
import githubPng from "../../assets/GitHub-logo.png"
import stackoverflow from '../../assets/stackoverflow.png'
import linkedin from '../../assets/linkedin.png'
import "../../styles/footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <p className="footer-text"> Thank you for visiting my portfolio. Let's connect further on LinkedIn, GitHub, or Stack Overflow.</p>
                <div className="footer-icons">
                    <a href="https://github.com/Brandon-perez19"><img src={githubPng} className="img-thumbnail footer-icon" alt="Github"></img></a>
                    <a href="https://www.linkedin.com/in/brandon-perez-9274911b5/"><img src={linkedin} className="img-thumbnail footer-icon" alt='LinkedIn'></img></a>
                    <a href="https://stackoverflow.com/users/16615549/brandon-perez19"><img src={stackoverflow} className="img-thumbnail footer-icon" alt="Stack Overflow"></img></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer