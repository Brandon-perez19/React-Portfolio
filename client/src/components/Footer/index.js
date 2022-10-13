import React from "react";
import githubPng from "../../assets/GitHub-logo.png"
import stackoverflow from '../../assets/stackoverflow.png'
import linkedin from '../../assets/linkedin.png'

function Footer() {
    return (
        <footer className='border-top row fixed-bottom'style={{backgroundColor: "#472836"}}>
            <div className="col">
                <p className="fst-italic pt-3"  style={{color: "#FEFFBE"}}> Thank you for visiting! </p>
            </div>
            <div className="col">
                <a href="https://github.com/Brandon-perez19"><img src={githubPng} className="img-thumbnail" style={{
                    height: "50px", width: "80px"
                }} alt=''></img></a>
                <a href="https://www.linkedin.com/in/brandon-perez-9274911b5/"><img src={linkedin} className="img-thumbnail" style={{
                    height: "50px", width: "50px"
                }} alt=''></img></a>
                <a href="https://stackoverflow.com/users/16615549/brandon-perez19"><img src={stackoverflow} className="img-thumbnail" style={{
                    height: "50px", width: "50px"
                }} alt=''></img></a>
            </div>
        </footer>
    )
};

export default Footer