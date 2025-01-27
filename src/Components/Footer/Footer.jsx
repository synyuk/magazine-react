import styles from"./Footer.scss"
import logo from "../../assets/img/logo.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="footer-logo">
                        <a href="/"><img src={logo} alt=""/></a>
                    </div>
                    <div className="footer-container">
                        <div className="footer-contact">
                            <h3>Contact</h3>
                            <address>
                                4517 Washington Ave. Manchester, Kentucky 39495 (239) 555-0108<br/>
                                <a href="mailto:contact@agon.com">contact@agon.com</a>
                            </address>
                            <div className="footer-socials">
                                <a href="#"><img src="assets/img/icons/facebook-icon.svg" alt=""/></a>
                                <a href="#"><img src="assets/img/icons/instagram-icon.svg" alt=""/></a>
                                <a href="#"><img src="assets/img/icons/twitter-icon.svg" alt=""/></a>
                                <a href="#"><img src="assets/img/icons/linkedin-icon.svg" alt=""/></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <div>
                                <h3>About Us</h3>
                                <ul>
                                    <li><a href="#">About V1</a></li>
                                    <li><a href="#">About V2</a></li>
                                    <li><a href="#">About V3</a></li>
                                    <li><a href="#">Services V1</a></li>
                                    <li><a href="#">Services V2</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Discover</h3>
                                <ul>
                                    <li><a href="#">Our Blog</a></li>
                                    <li><a href="#">Our Blog V1</a></li>
                                    <li><a href="#">Our Blog V2</a></li>
                                    <li><a href="#">Blog Single</a></li>
                                    <li><a href="#">Page 404</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">FAQ V2</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Career Detail</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Shop V2</a></li>
                                    <li><a href="#">Pricing V1</a></li>
                                    <li><a href="#">Pricing V2</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p className="copyright">©Agon Official <span id="current-data"></span></p>
                            <nav>
                                <a href="#">Privacy policy</a>
                                <a href="#">Cookies</a>
                                <a href="#">Terms of service</a>
                            </nav>
                        </div>
                    </div>
                </footer>
            <div className="modal-auth">
                <div className="modal-wrapper">
                    <img src="assets/img/icons/close.svg" alt="" className="modal-close"/>
                    <div className="modal-content">
                        <h3>Sign in</h3>
                        <button className="google-auth-button">
                    <span className="google-auth-button-icon">
                        <img src="assets/img/icons/google.svg" alt="Google" className="google-icon"/>
                    </span>
                            <span className="google-auth-button-text">Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                    crossOrigin=""></script>
        </>
)
}

export default Footer;