import "./Header.scss";
import logo from "../../assets/img/logo.svg";
import basketIcon from "../../assets/img/icons/basket-icon.svg";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../../App";

function Header() {

    const { counter } = useMyContext();

    return (
        <header>
            <div className="logo animate__animated animate__zoomIn">
                <a href="/magazine-react/"><img src={logo} alt=""/></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/magazine-react/" className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/magazine-react/about" className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                        }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/magazine-react/company" className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                        }>Company</NavLink>
                    </li>
                    <li>
                        <NavLink to="/magazine-react/blog" className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                        }>Blog</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="cta">
                <button className="main-btn">Get Started</button>
                <NavLink className="backet-link" to="/magazine-react/basket">
                    <img src={basketIcon} alt="Basket"/>
                    {counter !== 0 ? <div className="counter">{counter}</div> : null}
                </NavLink>
            </div>
            <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
