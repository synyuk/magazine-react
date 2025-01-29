import "./Header.scss";
import logo from "../../assets/img/logo.svg";
import authIcon from "../../assets/img/icons/auth.svg";
import basketIcon from "../../assets/img/icons/basket-icon.svg";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo animate__animated animate__zoomIn">
                <a href="/"><img src={logo} alt=""/></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/magazine-react/">Home</a>
                    </li>
                    <li>
                        <a href="/magazine-react/about">About</a>
                    </li>
                    <li>
                        <a href="/magazine-react/company">Company</a>
                    </li>
                    <li>
                        <a href="/magazine-react/blog">Blog</a>
                    </li>
                </ul>
            </nav>
            <div className="cta">
                <button className="main-btn">Get Started</button>
                {/*<a className="modal-auth-btn" href="#"><img src={authIcon} alt="Autorization"/></a>*/}
                <a className="backet-link" href="#"><img src={basketIcon} alt="Basket"/></a>
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