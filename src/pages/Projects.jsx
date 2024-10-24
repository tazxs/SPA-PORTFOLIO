import imgOne from '../img/projects/01.jpg';
import imgTwo from '../img/projects/02.jpg';
import imgThree from '../img/projects/03.jpg';
import imgFour from '../img/projects/04.jpg';
import imgFive from '../img/projects/05.jpg';
import imgSix from '../img/projects/06.jpg';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img
                                src={imgOne}
                                alt="Project img"
                                className="project__img"
                            />
                            <h3 className="project__title">
                                Gaming streaming portal
                            </h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img
                                src={imgTwo}
                                alt="Project img"
                                className="project__img"
                            />
                            <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img
                                src={imgThree}
                                alt="Project img"
                                className="project__img"
                            />
                            <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img
                            src={imgFour}
                            alt="Project img"
                            className="project__img"
                        />
                        <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img
                            src={imgFive}
                            alt="Project img"
                            className="project__img"
                        />
                        <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img
                            src={imgSix}
                            alt="Project img"
                            className="project__img"
                        />
                        <h3 className="project__title">Gaming community</h3>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Projects;
