import React from 'react';
import Navigation from '../components/Navigation';
import Projectlist from '../components/portfolio/ProjectList';

const Portofolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <Projectlist />
        </div>
    );
};

export default Portofolio;