import '../Css/Navbar.css'
import React from 'react';

export default function Navbar(props) {
    return (
        <>
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h1>
                        <div className="nav-both-logo">
                            <a id="first-logo" href="/">Text</a>
                            <a id="second-logo" href="/">Layout</a>
                        </div>
                    </h1>
                </div>
            </nav>
        </div>
        </>
    )
}
