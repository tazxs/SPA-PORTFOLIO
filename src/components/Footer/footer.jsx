import Vk from "../../img/icons/vk.svg";
import Instagram from "../../img/icons/instagram.svg";
import Twitter from "../../img/icons/twitter.svg";
import GitHub from "../../img/icons/gitHub.svg";
import LinkedIn from "../../img/icons/linkedIn.svg";
import "./style.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={Vk} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={Instagram} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={Twitter} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={GitHub} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={LinkedIn} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 toha.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
