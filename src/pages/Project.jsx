import { useParams } from 'react-router-dom';

import BtnGit from '../components/buttons/BtnGit/BtnGit';
import {projects} from '../helpers/projectsList'



const Project = ({image,title}) => {
    const {id} = useParams();
    const project = projects[id];
    console.log(project.ImgBig);
    
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img
                        src={project.ImgBig}
                        alt=""
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <BtnGit link="youtoube.com"/>

                </div>
            </div>
        </main>
    );
};

export default Project;
