import React from 'react';
import Button from './Button';

const HeroArea = ({ Increase }) => {
    return (
        <div className="home">
            <h1>Welcome To My Home page</h1>
            <p>This Is My Home Page @2025</p>
            <Button text="Increase" onClick={Increase} />
        </div>
    );
};

export default HeroArea;