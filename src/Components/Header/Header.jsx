import "./Header.scss";
import logo from "../../../public/assets/img/logo.svg";
import authIcon from "../../../public/assets/img/icons/auth.svg";

function Header() {
    return (
        <header>
            <div className="logo animate__animated animate__zoomIn">
                <a href="/"><img src={logo} alt=""/></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </nav>
            <div className="cta">
                <button className="main-btn">Get Started</button>
                <a className="modal-auth-btn" href="#"><img src={authIcon} alt="Autorization"/></a>
            </div>
            <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    )
}

export default Header;