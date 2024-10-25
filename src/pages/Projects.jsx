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
                            <Project
                                image={projects.img}
                                title={projects.title}
                                key={i}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
