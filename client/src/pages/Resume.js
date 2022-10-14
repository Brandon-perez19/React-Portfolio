import resume from '../assets/Brandon_Perez_Resume.pdf'

function Resume() {
    return (
        <div className='viewer'>
            <h2> Professional Skills </h2>
            <div>
                <h4>Click <a href={resume} className="text-decoration-none link-light " download> here </a> to download my resume! </h4>
            </div>
            <section>
                <div className='viewer' style={{display: "inline", textAlign: "left"}}>
                    <ul>
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
            </section>
        </div>
    )
}

export default Resume