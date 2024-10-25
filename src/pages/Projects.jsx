import Project from "../components/Project/project";
import { projects } from "../helpers/projectsList";
const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, i) => {
                        return (
                            <Project img={project.img} title={project.title} key={i} />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
