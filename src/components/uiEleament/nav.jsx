import React from 'react';

const Nav = () => {
    const liStyle = {
        listStyle: "none",
        fontSize: "20px",
    };

    const linkStyle = {
        color: "blue",
        textDecoration: "none",
        cursor: "pointer",
    };

    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    gap: "30px",
                    margin: 0,
                    padding: 0,
                    alignItems: "center",
                }}
            >
                <li style={liStyle}>
                    <a style={linkStyle} href="#">Home</a>
                </li>
                <li style={liStyle}>
                    <a style={linkStyle} href="#">About</a>
                </li>
                <li style={liStyle}>
                    <a style={linkStyle} href="#">Contact</a>
                </li>
                <li style={liStyle}>
                    <a style={linkStyle} href="#">Services</a>
                </li>
                <li style={liStyle}>
                    <a style={linkStyle} href="#">Blog</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
