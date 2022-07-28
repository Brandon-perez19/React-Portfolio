import resume from '../assets/resume.jpeg'

function Resume() {
    return (

        <div>
            <div >
                <h2 className='text-muted'> Professional Skills </h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Database integration</li>
                    <li className="list-group-item"> MongoDB</li>
                    <li className="list-group-item"> SQL</li>
                    <li className="list-group-item"> Node.js</li>
                    <li className="list-group-item"> Express.js</li>
                    <li className="list-group-item"> Html, CSS </li>
                    <li className="list-group-item"> JavaScript</li>
                    <li className="list-group-item"> BootStrap</li>
                    <li className="list-group-item"> RESTful API</li>
                    <li className="list-group-item"> React</li>
                    <li className="list-group-item"> Analytical thinking</li>
                    <li className="list-group-item"> Resolving technical issues</li>
                    <li className="list-group-item"> Communication skills</li>
                    <li className="list-group-item"> Teamwork </li>
                    <li className="list-group-item"> Adaptability </li>
                </ul>
                <h4>Click <a href={resume} className="text-decoration-none" download> here </a> to download my resume! </h4>
            </div>
        </div>
    )
}

export default Resume