import "./Hero.scss"
import projectPic from "../../assets/img/icons/project.svg"
import diagramPic from "../../assets/img/hero/diagram.png"
import clockPic from "../../assets/img/hero/clock.webp"
import customerPic from "../../assets/img/icons/customer.svg"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <div className="title animate__animated animate__lightSpeedInLeft animate__slow">Exclusive Smart Watch
                </div>
                <h1 className="animate__animated animate__lightSpeedInLeft animate__slow animate__delay-1s">Let go of
                    the Challenge<br/>See yourself better</h1>
                <p className="animate__animated animate__lightSpeedInLeft animate__slow animate__delay-2s">Connect your
                    conversations with the tools and services that you use to get the job done. With over 1,500 apps and
                    a robust API</p>
                <div className="cta">
                    <button className="secondary-btn">Get Started</button>
                    <button className="secondary-btn white-btn">How it works</button>
                </div>
                <div className="stats">
                    <div className="stats-item">
                        <div className="stats-icon">
                            <img src={projectPic} alt=""/>
                        </div>
                        <div className="stats-info">
                            <div className="stats-count">+12k</div>
                            <div className="stats-name">Projects done</div>
                        </div>
                    </div>
                    <div className="stats-item">
                        <div className="stats-icon">
                            <img src={customerPic} alt=""/>
                        </div>
                        <div className="stats-info">
                            <div className="stats-count">+68k</div>
                            <div className="stats-name">Customers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img className="hero-image-watch" width="325px" height="350px" src={clockPic}
                     alt="watch"/>
                <img
                    className="hero-image-diagram animate__animated animate__lightSpeedInRight animate__slow animate__delay-3s"
                    width="206px" height="163px" src={diagramPic} alt="diagram"/>
                <svg
                    className="hero-image-circle-1 animate__animated animate__pulse animate__infinite infinite animate__delay-1s"
                    width="69" height="69" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34.5" cy="34.5" r="34.5" fill="#FFDDD2"/>
                </svg>
                <svg
                    className="hero-image-circle-2 animate__animated animate__pulse animate__infinite infinite animate__delay-2s"
                    width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23" cy="23" r="23" fill="#FFDDD2"/>
                </svg>
                <svg
                    className="hero-image-circle-3 animate__animated animate__pulse animate__infinite infinite animate__delay-3s"
                    width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23" cy="23" r="23" fill="#BEE1E6"/>
                </svg>
            </div>
        </section>
    )
}

export default Hero;