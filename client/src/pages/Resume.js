import resume from '../assets/Brandon_Perez_Resume.pdf'
import '../styles/resume.css'
function Resume() {
    return (
        <div className='container viewer'>
            <h2 className="mt-4"> Professional Skills </h2>
            <div className='download-resume my-4'>
                <h4>Click <a href={resume} className="link" download>here</a> to download my resume!</h4>
            </div>
            <section>
                    <ul className='skills-list list-unstyled'>
                        
                        <li> JavaScript</li>
                        <li> BootStrap</li>
                        <li> Node.js</li>
                        <li> Express.js</li>
                        <li> Html</li>
                        <li>CSS</li>
                        <li> RESTful API</li>
                        <li> React</li>
                        <li> Teamwork </li>
                        <li> Adaptability </li>
                        <li> MongoDB</li>
                        <li> SQL</li>
                        <li> Database integration</li>
                        <li> Analytical thinking</li>
                        <li> Resolving technical issues</li>
                        <li> Communication skills</li>
                        
                    </ul>
            </section>
        </div>
    )
}

export default Resume