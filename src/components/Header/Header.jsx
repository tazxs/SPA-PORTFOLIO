import './stye.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Toha</em>
                    </strong>
                    <br />a frontend developer/Trader
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;
