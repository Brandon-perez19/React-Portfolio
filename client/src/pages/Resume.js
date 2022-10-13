import resume from '../assets/Brandon_Perez_Resume.pdf'

function Resume() {
    return (

        <div>
            <div >
                <h2 style={{color: "#FEFFBE"}}> Professional Skills </h2>
                <ul className="list-group list-group-flush" >
                    <li style={{backgroundColor: "#EBD494"}}className="list-group-item"> Database integration</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> MongoDB</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> SQL</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Node.js</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Express.js</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Html, CSS </li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> JavaScript</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> BootStrap</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> RESTful API</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> React</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Analytical thinking</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Resolving technical issues</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Communication skills</li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Teamwork </li>
                    <li style={{backgroundColor: "#EBD494"}} className="list-group-item"> Adaptability </li>
                </ul>
                <h4>Click <a href={resume} className="text-decoration-none" download> here </a> to download my resume! </h4>
            </div>
        </div>
    )
}

export default Resume