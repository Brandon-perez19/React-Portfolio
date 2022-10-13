import resume from '../assets/Brandon_Perez_Resume.pdf'

function Resume() {
    return (
        <div>
            <h2 style={{ color: "#FEFFBE" }}> Professional Skills </h2>
            <div>
                <div style={{ display: "inline-block", textAlign: "left" }}>
                    <ul className="list-group list-group-flush" >
                        <li> Database integration</li>
                        <li> MongoDB</li>
                        <li> SQL</li>
                        <li> Node.js</li>
                        <li> Express.js</li>
                        <li> Html, CSS </li>
                        <li> JavaScript</li>
                        <li> BootStrap</li>
                        <li> RESTful API</li>
                        <li> React</li>
                        <li> Analytical thinking</li>
                        <li> Resolving technical issues</li>
                        <li> Communication skills</li>
                        <li> Teamwork </li>
                        <li> Adaptability </li>
                    </ul>
                </div>
                <div style={{ display: "inline-block", textAlign: "right" }}>
                    <h4>Click <a href={resume} className="text-decoration-none" download> here </a> to download my resume! </h4>
                </div>
            </div>
        </div>
    )
}

export default Resume