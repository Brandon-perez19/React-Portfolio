import React from "react";
import githubPng from "../../assets/GitHub-logo.png"

function Footer() {
    return (
        <footer className='border-top'>
            <p style={{ display: "inline" }} className="fst-italic"> Thank you for visiting! </p>
            <a href="https://github.com/Brandon-perez19"><img src={githubPng} alt=''></img></a>
        </footer>
    )
};

export default Footer