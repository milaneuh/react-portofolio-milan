import React from 'react';
import { NavLink } from 'react-router-dom';
const Notfound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé, cette page n'existe pas</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Notfound;