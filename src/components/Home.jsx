import React from "react";
import Button from "./uiEleament/Button";
import "./Home.css";
import HeroArea from "./uiEleament/HeroArea";


import hockey1 from "../assets/hockey1.jpg";
import hockey2 from "../assets/hockey2.jpg";
import hockey3 from "../assets/hockey3.jpg";
import hockey4 from "../assets/hockey4.jpg";
import hockey5 from "../assets/hockey5.jpg";
import hockey6 from "../assets/hockey6.jpg";

const Home = () => {
    return (
        <>
            <HeroArea />
            <div className="servicesArea">
                <h2>Our services</h2>
                <p>We Offer a variety of services to help you succeed.</p>
                <div className="cardContainer">
                    <div className="card">
                        <img src={hockey1} alt="Service 1" />
                        <h3>Service 1</h3>
                        <p>Description of service 1</p>
                        <button>Details</button>
                    </div>
                    <div className="card">
                        <img src={hockey2} alt="Service 2" />
                        <h3>Service 2</h3>
                        <p>Description of service 2</p>
                        <button>Details</button>
                    </div>
                    <div className="card">
                        <img src={hockey3} alt="Service 3" />
                        <h3>Service 3</h3>
                        <p>Description of service 3</p>
                        <button>Details</button>
                    </div>
                    <div className="card">
                        <img src={hockey4} alt="Service 4" />
                        <h3>Service 4</h3>
                        <p>Description of service 4</p>
                        <button>Details</button>
                    </div>
                    <div className="card">
                        <img src={hockey5} alt="Service 5" />
                        <h3>Service 5</h3>
                        <p>Description of service 5</p>
                        <button>Details</button>
                    </div>
                    <div className="card">
                        <img src={hockey6} alt="Service 6" />
                        <h3>Service 6</h3>
                        <p>Description of service 6</p>
                        <button>Details</button>
                    </div>
                </div>
                <Button text="Learn More" />
            </div>
        </>
    );
};

export default Home;