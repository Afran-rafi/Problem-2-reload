import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue">
                <div className="container navbar-p">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/product">Product</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/order">Order</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/login">Login</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/register">Register</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;