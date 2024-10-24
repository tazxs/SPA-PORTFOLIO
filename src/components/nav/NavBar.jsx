import './style.css'
import Sun from "../../img/icons/sun.svg";
import Moon from "../../img/icons/moon.svg";
const Nav = () => {
    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo">
                    <strong>Trader</strong> portfolio
                </a>

                <button className="dark-mode-btn">
                    <img
                        src={Sun}
                        alt="Light mode"
                        className="dark-mode-btn__icon"
                    />
                    <img
                        src={Moon}
                        alt="Dark mode"
                        className="dark-mode-btn__icon"
                    />
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a
                            href="./index.html"
                            className="nav-list__link nav-list__link--active"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="./projects.html"
                            className="nav-list__link"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="./contacts.html"
                            className="nav-list__link"
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
 
export default Nav;